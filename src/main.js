'use strict';

import { makeQuery } from './utils';

class GSheetReader {
  getTable(entries) {
    const table = [];
    const cols = Math.max(...entries.map((entry) => +entry.gs$cell.col));
    const rows = Math.max(...entries.map((entry) => +entry.gs$cell.row));

    for (let index = 0; index < rows; index++) {
      const row = Array(cols);
      table.push(row);
    }

    for (const entry of entries) {
      const row = +entry.gs$cell.row;
      const col = +entry.gs$cell.col;
      table[row - 1][col - 1] = +entry.gs$cell.numericValue || entry.gs$cell.$t;
    }

    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < table[row].length; col++) {
        if (!table[row][col]) {
          table[row][col] = '';
        }
      }
    }

    return { table, size: { cols, rows } };
  }

  async getJSON(id, sheetNumber = 1) {
    if (!id) {
      throw new Error('id parameter is missing');
    }

    const endpoint = `https://spreadsheets.google.com/feeds/cells/${id}/${sheetNumber}/public/values?alt=json`;

    try {
      const entries = await makeQuery(endpoint);
      const { table, size } = this.getTable(entries);
      const headers = table.shift();
      const data = table.map((row) => {
        return row.reduce((record, value, index) => {
          record[headers[index]] = value;
          return record;
        }, {});
      });

      return {
        data,
        headers,
        size,
      };
    } catch (error) {
      throw new Error(error);
    }
  }
}

export default GSheetReader;

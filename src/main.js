export default class GSheetReader {
  constructor(id) {
    this.queryURL =
      'https://spreadsheets.google.com/feeds/cells/' +
      id +
      '/1/public/values?alt=json';
  }

  async makeQuery() {
    try {
      const response = await fetch(this.queryURL);
      const responseJSON = await response.json();
      return responseJSON.feed.entry;
    } catch (error) {
      throw new Error(error);
    }
  }

  parseEntry(entry) {
    let lastCol = 1;
    const values = entry.map((value) => {
      lastCol = +value.gs$cell.col;
      return +value.gs$cell.numericValue || value.gs$cell.$t;
    });

    const entries = [];
    while (values.length) {
      const subset = values.splice(0, lastCol);
      entries.push(subset);
    }

    return entries;
  }

  async getJSON() {
    try {
      const entries = await this.makeQuery();
      const sheetValues = this.parseEntry(entries);
      const headers = sheetValues.shift();
      const data = sheetValues.map((row) => {
        return row.reduce((record, value, index) => {
          record[headers[index]] = value;
          return record;
        }, {});
      });

      return {
        data,
        headers,
        size: { cols: headers.length, rows: data.length },
      };
    } catch (error) {
      throw new Error(error);
    }
  }
}

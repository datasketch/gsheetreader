# gsheetreader

Transform a public Google Spreadsheet to JSON

## Install

From npm:

```sh
npm install @ddazal/gsheetreader
```

As a script tag:
```html
<script src="https://cdn.jsdelivr.net/gh/datasketch/gsheetreader@2/dist/gsheetreader.umd.js"></script>
```

## Usage

```js
const id = 'some-google-sheet-public-id';
const gsr = new GSheetReader();
gsr.getJSON(id).then(console.log);
```

Alternatively, the function can receive a number as a second parameter to indicate the sheet that will be read. This second parameter defaults to `1`.

```js
// This will read the data from the third sheet
const id = 'some-google-sheet-public-id';
const gsr = new GSheetReader();
gsr.getJSON(id, 3).then(console.log);
```

The `getJSON` function returns an object with properties `data`, `headers` and `size`.

## Roadmap

- [x] Publish to npm registry
- [ ] Read multiples sheets within the same spreadsheet
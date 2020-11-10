# gsheetreader

Transform a public Google Spreadsheet to JSON

```html
<script src="https://cdn.jsdelivr.net/gh/datasketch/gsheetreader/dist/gsheetreader.min.js"></script>
```

## Usage

```js
const id = 'some-google-sheet-public-id';
const gsr = new GSheetReader();
gsr.getJSON(id).then(console.log);
```

## Roadmap

- [ ] Publish to npm registry
- [ ] Read multiples sheets within the same spreadsheet
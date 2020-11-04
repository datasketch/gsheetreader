# gsheetreader

Transform a public Google Spreadsheet to JSON

```js
const id = 'some-google-sheet-public-id';
const gsr = new GSheetReader(id);
gsr.getJSON().then(console.log);
```

## Roadmap

- [ ] Publish to npm registry
- [ ] Read multiples sheets within the same spreadsheet
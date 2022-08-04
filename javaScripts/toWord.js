const {
  Table,
  Document,
  Packer,
  Paragraph,
  TextRun,
  TableRow,
  TableCell,
} = require("docx");

const parseString = (string, x) => {
  let finalArray = [];
  let separatedParagraphs = string.split("\n");
  let separatedWordsAndParagraphs = [];
  separatedParagraphs.forEach((element) => {
    separatedWordsAndParagraphs.push(element.split(" "));
  });

  for (let i = 0; i < separatedWordsAndParagraphs.length; i++) {
    if (separatedWordsAndParagraphs[i].length > 1) {
      separatedWordsWithinParagraphs = [];
      for (let j = 0; j < separatedWordsAndParagraphs[i].length; j += x) {
        separatedWordsWithinParagraphs.push(
          separatedWordsAndParagraphs[i].slice(j, j + x)
        );
      }
      finalArray.push(separatedWordsWithinParagraphs);
    } else {
      finalArray.push([separatedWordsAndParagraphs[i]]);
    }
  }
  return finalArray;
};
const WORDSPERCOLUMN = 2;
const COLUMNS = 2;
toWordDoc = (words, columns = 2) => {
  for (paragraph of words) {
    console.log(paragraph);
    let row = new TableRow();
    for (let i = 0; i < paragraph.length; i += columns) {
      for (let j = 0; j < columns; j++) {
        if (i + j < paragraph.length) {
          row.addCell(new TableCell(new Paragraph(paragraph[i + j])));
        }
      }
    }
    console.log("\n");
  }
};
toWordDoc(
  parseString("Hello\nWorld i am very pleased to meet you", WORDSPERCOLUMN),
  COLUMNS
);

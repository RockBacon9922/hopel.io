const {
  Table,
  Document,
  Packer,
  Paragraph,
  TableRow,
  TableCell,
  WidthType,
  AlignmentType,
  BorderStyle,
} = require("docx");
const fs = require("fs");

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

toWordDoc = (words, columns = 2) => {
  let tableRows = [];
  for (paragraph of words) {
    console.log(paragraph);
    for (let i = 0; i < paragraph.length; i += columns) {
      let row = [];
      for (let j = 0; j < columns && paragraph[i + j] != undefined; j++) {
        // console.log(typeof paragraph[i + j][0]);
        console.log(paragraph[i + j] + " " + i + " " + j);
        if (paragraph[i + j][1] == undefined) {
          paragraph[i + j][1] = "";
        }
        let theText = paragraph[i + j][0] + " " + paragraph[i + j][1];
        let g = new TableCell({
          borders: {
            top: {
              style: BorderStyle.NONE,
              size: 0,
              color: "ff0000",
            },
            bottom: {
              style: BorderStyle.NONE,
              size: 0,
              color: "ff0000",
            },
            left: {
              style: BorderStyle.NONE,
              size: 0,
              color: "ff0000",
            },
            right: {
              style: BorderStyle.NONE,
              size: 0,
              color: "ff0000",
            },
          },
          width: {
            size: 4505,
            type: WidthType.DXA,
          },
          children: [
            new Paragraph({
              text: theText,
              alignment: AlignmentType.CENTER,
            }),
          ],
        });
        row.push(g);
      }
      tableRows.push(new TableRow({ children: row }));
    }
  }

  const doc = new Document({
    title: "hopel",
    sections: [
      {
        children: [new Table({ columnWidths: [4505, 4505], rows: tableRows })],
      },
    ],
  });

  Packer.toBuffer(doc).then((buffer) => {
    fs.writeFileSync("mydoc.docx", buffer);
  });
};

const WORDSPERCOLUMN = 2;
const COLUMNS = 2;
toWordDoc(
  parseString("Hello\nWorld i am very pleased to meet you", WORDSPERCOLUMN),
  COLUMNS
);

import {
  Table,
  Document,
  Paragraph,
  TableRow,
  TableCell,
  WidthType,
  AlignmentType,
  BorderStyle,
} from "docx";

const parseString = (string, x) => {
  let finalArray = [];
  let separatedParagraphs = string.split("\n");
  let separatedWordsAndParagraphs = [];
  separatedParagraphs.forEach((element) => {
    separatedWordsAndParagraphs.push(element.split(" "));
  });

  for (let i = 0; i < separatedWordsAndParagraphs.length; i++) {
    if (separatedWordsAndParagraphs[i].length > 1) {
      let separatedWordsWithinParagraphs = [];
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

const toWordDoc = (words, columns = 2) => {
  let tableRows = [];
  for (let paragraph of words) {
    console.log(paragraph);
    for (let i = 0; i < paragraph.length; i += columns) {
      let row = [];
      for (let j = 0; j < columns && paragraph[i + j] != undefined; j++) {
        // console.log(typeof paragraph[i + j][0]);
        console.log(paragraph[i + j] + " " + i + " " + j);
        let theText = "";
        for (let k = 0; k < paragraph[i + j].length; k++) {
          console.log(paragraph[i + j][k]);
          if (paragraph[i + j][k] == undefined) {
            paragraph[i + j][k] = "";
          }
          theText += paragraph[i + j][k] + " ";
        }
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
      tableRows.push(new TableRow({ children: row, cantSplit: true }));
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
  return doc;
};

export function wordDoc(words, wordsPerColumn = 2, columns = 2) {
  return toWordDoc(parseString(words, wordsPerColumn), columns);
}

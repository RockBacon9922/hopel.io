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
    const rows = [];
    for (let i = 0; i < words.length; i += columns) {
      let row = [];
      for (let j = 0; j < columns; j++) {
        if (words[i + j] === undefined) {
          words[i + j] = "";
        }
        row.push(words[i + j]);
      }
      rows.push(row);
      // rows.push(
      //   new TableRow({
      //     children: row.map((word) => {
      //       return new TableCell({
      //         children: [new Paragraph(word)],
      //       });
      //     }),
      //   })
      // );
    }
    console.log(rows);
    return rows;
    // const theTable = new Table({
    //   rows: rows,
    // });
    // const doc = new Document({
    //   sections: [
    //     {
    //       children: theTable,
    //     },
    //   ],
    // });

    // // Used to export the file into a .docx file
    // Packer.toBuffer(doc).then((buffer) => {
    //   fs.writeFileSync("My Document.docx", buffer);
    // });
  }
};

toWordDoc(
  parseString("Hello\nWorld i am very pleased to meet you", WORDSPERCOLUMN),
  COLUMNS
);

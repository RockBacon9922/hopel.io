const fs = require("fs");
const docx = require("docx");
const Document = docx.Document;
const Packer = docx.Packer;
const Paragraph = docx.Paragraph;
const TextRun = docx.TextRun;
const TabStopType = docx.TabStopType;
const TabStopPosition = docx.TabStopPosition;

const parseString = (string, x) => {
  let array = [];
  let sortedWords = [];
  let splitWords = string.split("\n").join(" ").split(" ");
  for (let i = 0; i < splitWords.length; i += x) {
    let demoArray = [];
    for (let j = 0; j < x; j++) {
      if (splitWords[i + j] === undefined) {
        splitWords[i + j] = "";
      }
      demoArray.push(splitWords[i + j]);
    }
    sortedWords.push(demoArray);
  }
  for (let i = 0; i < sortedWords.length; i += 2) {
    if (sortedWords[i] === undefined) {
      sortedWords[i] = "";
    }
    if (sortedWords[i + 1] === undefined) {
      sortedWords[i + 1] = "";
    }
    array.push([sortedWords[i], sortedWords[i + 1]]);
  }
  return array;
};

const toText = (theString, x) => {
  let sortedWords = parseString(theString, x);
  let text = "";
  for (let i = 0; i < sortedWords.length; i++) {
    let left = "";
    let right = "";
    try {
      left = sortedWords[i][0].join(" ");
    } catch {
      left = sortedWords[i][0];
    }
    try {
      right = sortedWords[i][1].join(" ");
    } catch {
      right = sortedWords[i][1];
    }
    if (sortedWords[i][0] === undefined) {
      left = "";
    }
    if (sortedWords[i][1] === undefined) {
      right = "";
    }
    text += `${left}\t${right}\n`;
  }
  return text;
};

const toWordDoc = (words) => {
  // Documents contain sections, you can have multiple sections per document, go here to learn more about sections
  // This simple example will only contain one section
  // loop through every word in the array
  let lines = [];
  for (let line in words) {
    const nPg = new Paragraph({
      children: [
        new TextRun({
          text: words[line][0] + "\t" + words[line][1],
        }),
      ],
      tabStops: [
        {
          type: TabStopType.RIGHT,
          position: TabStopPosition.MAX,
        },
      ],
    });
    lines.push(nPg);
  }

  const doc = new Document({
    sections: [
      {
        properties: {},
        children: lines,
      },
    ],
  });

  // Used to export the file into a .docx file
  Packer.toBuffer(doc).then((buffer) => {
    fs.writeFileSync("My Document.docx", buffer);
  });
};

// console.log(toText("the quick brown fox jumps over the lazy dog", 2));
toWordDoc(parseString("the quick brown fox jumps over the lazy dog", 2));

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
  const splitWords = string.split("\n").join(" ").split(" ");
  for (let i = 0; i < splitWords.length; i += x) {
    let demoArray = [];
    for (let j = 0; j < x; j++) {
      demoArray.push(splitWords[i + j]);
    }
    sortedWords.push(demoArray);
  }
  for (let i = 0; i < sortedWords.length; i += 2) {
    array.push([sortedWords[i], sortedWords[i + 1]]);
  }
  return sortedWords;
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
    text += `${left}                                                  ${right}\n`;
  }
  return text;
};

const toWordDoc = (words) => {
  // Documents contain sections, you can have multiple sections per document, go here to learn more about sections
  // This simple example will only contain one section
  // loop through every word in the array
  for (let i = 0; i < words.length; i++) {
    // create a new paragraph
    let paragraph = new Paragraph();
    // create a new text run
    let textRun = new TextRun(words[i]);
    // add the text run to the paragraph
    paragraph.addRun(textRun);
    // add the paragraph to the document
    document.addParagraph(paragraph);
  }

  const doc = new Document({
    sections: [
      {
        properties: {},
        children: [
          new Paragraph({
            children: [
              new TextRun({ text: "Hey everyone", bold: true }),
              new TextRun("\t11th November 1999"),
            ],
            tabStops: [
              {
                type: TabStopType.RIGHT,
                position: TabStopPosition.MAX,
              },
            ],
          }),
        ],
      },
    ],
  });

  // Used to export the file into a .docx file
  Packer.toBuffer(doc).then((buffer) => {
    fs.writeFileSync("My Document.docx", buffer);
  });
};

// console.log(toText("the quick brown fox jumps over the lazy dog", 2));
toWordDoc("hi");

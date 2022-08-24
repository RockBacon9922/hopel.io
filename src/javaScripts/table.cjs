const fs = require("fs");
const {
  Document,
  Packer,
  Paragraph,
  Table,
  TableCell,
  TableRow,
  WidthType,
} = require("docx");

const table2 = new Table({
  columnWidths: [4505, 4505],
  rows: [
    new TableRow({
      children: [
        new TableCell({
          width: {
            size: 4505,
            type: WidthType.DXA,
          },
          children: [new Paragraph("Hello")],
        }),
        new TableCell({
          width: {
            size: 4505,
            type: WidthType.DXA,
          },
          children: [],
        }),
      ],
    }),
    new TableRow({
      children: [
        new TableCell({
          width: {
            size: 4505,
            type: WidthType.DXA,
          },
          children: [],
        }),
        new TableCell({
          width: {
            size: 4505,
            type: WidthType.DXA,
          },
          children: [new Paragraph("World")],
        }),
      ],
    }),
  ],
});

const doc = new Document({
  sections: [
    {
      children: [new Paragraph({ text: "Table with equal widths" }), table2],
    },
  ],
});

Packer.toBuffer(doc).then((buffer) => {
  fs.writeFileSync("My Document.docx", buffer);
});

import { wordDoc } from "./javaScripts/toWord";
import { save } from "@tauri-apps/api/dialog";
import { writeTextFile, writeBinaryFile, writeFile } from "@tauri-apps/api/fs";
import { Packer } from "docx";
import { useRef } from "react";

const App = () => {
  const textInput = useRef();
  const columns = useRef();
  const wordsPerColumn = useRef();

  const saveFile = async () => {
    const text = textInput.current.value;
    const columnsValue = parseInt(columns.current.value);
    const wordsPerColumnValue = parseInt(wordsPerColumn.current.value);
    const filePath = await save({
      multiple: true,
      title: "Save File",
      filters: [
        {
          name: "Word Document",
          extensions: ["docx"],
        },
      ],
    });
    let docString = wordDoc(text, wordsPerColumnValue, columnsValue);
    let blob = await Packer.toBlob(docString);
    let buffer = await new Response(blob).arrayBuffer();
    let output = new Uint8Array(buffer);
    writeBinaryFile(filePath, output)
      .then(() => {
        console.log("file saved");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="min-h-screen min-w-screen flex justify-center text-center ">
      <div className="flex justify-center flex-col gap-5 items-center w-2/3 ">
        <h1 className="text-5xl mt-3 mb-3 font-bold">Hopel.io</h1>
        <textarea
          className="w-5/6 h-2/4 p-2 rounded-md shadow-md"
          placeholder="Input Text"
          ref={textInput}
        />
        <div className="grid grid-cols-2 gap-y-5 gap-x-3 items-center">
          <h1>Number of Columns:</h1>
          <input type="number" defaultValue={2} ref={columns} />
          <h1>Number of words per column:</h1>
          <input type="number" defaultValue={2} ref={wordsPerColumn} />
        </div>
        <button onClick={saveFile} className="mb-3">Create your Hopel</button>
      </div>
    </div>
  );
};

export default App;

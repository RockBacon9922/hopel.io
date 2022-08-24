
const App = () => {
  return (
    <div className="min-h-screen min-w-screen flex justify-center text-center ">
      <div className="flex justify-center flex-col gap-5 items-center w-2/3 ">
      <h1 className="text-5xl mt-3 mb-3 font-bold">Hopel.io</h1>
        <textarea className="w-5/6 h-2/4 p-2 rounded-md shadow-md" placeholder="Input Text"/>
        <div className="grid grid-cols-2 gap-y-5 gap-x-3 items-center">
          <h1>Number of Columns:</h1>
          <input type="number" defaultValue={2} />
          <h1>Number of words per column:</h1>
          <input type="number" defaultValue={2}/>
        </div>
        <button>Create your Hopel</button>
      </div>
    </div>
  );
};

export default App;

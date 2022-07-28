const parseString = (string, x) => {
  let array = [];
  const splitWords = string.split("/n").join(" ").split(" ");
  for (let i = 0; i < splitWords.length; i += x) {
    let demoArray = [];
    for (let j = 0; j < x; j++) {
      demoArray.push(splitWords[i + j]);
    }
    array.push(demoArray);
  }
  return array;
};

console.log(parseString("the quick brown fox jumps over the lazy dog", 2));

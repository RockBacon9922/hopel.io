export function parseString(string, x) {
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
  return array;
}

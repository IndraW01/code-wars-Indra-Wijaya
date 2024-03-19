var capitals = function (word) {
  const result = [];

  // Write your code here
  for (let i = 0; i < word.length; i++) {
    if (word[i] == word[i].toUpperCase()) {
      result.push(i);
    }
  }

  return result;
};

console.log(capitals('CodEWaRs'));
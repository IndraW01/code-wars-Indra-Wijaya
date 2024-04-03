function removeDuplicateWords(s) {
  // your perfect code...

  const arrays = s.split(" ");
  const result = [];

  for (let i = 0; i < arrays.length; i++) {
    if (arrays.indexOf(arrays[i]) == i) {
      result.push(arrays[i]);
    }
  }

  return result.join(" ");
}

console.log(removeDuplicateWords('alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'));
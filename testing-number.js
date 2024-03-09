var number = function (array) {
  //your awesome code here
  const arrays = [];

  for (let i = 0; i < array.length; i++) {
    arrays.push(`${i + 1}: ${array[i]}`);
  }

  return arrays;
}

console.log(number([]));
console.log(number(["a", "b", "C"]));
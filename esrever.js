const reverse = function (array) {
  // TODO: program me!
  const arr = [];

  for (let i = array.length - 1; i >= 0; i--) {
    arr.push(array[i]);
  }

  return arr;
}

console.log(reverse([1, 2, 3]));

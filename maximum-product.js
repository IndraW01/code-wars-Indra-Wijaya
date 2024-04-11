function adjacentElementsProduct(array) {
  let max;

  for (let i = 0; i < array.length; i++) {
    if ((i + 1) > array.length) {
      break;
    }

    if (i == 0) {
      max = array[i] * array[i + 1];
    } else {
      if ((array[i] * array[i + 1]) > max) {
        max = array[i] * array[i + 1];
      }
    }

    // console.log((array[i] * array[i + 1]));

  }

  return max;
}

console.log(adjacentElementsProduct([5, 8]));
console.log(adjacentElementsProduct([1, 2, 3]));
console.log(adjacentElementsProduct([9, 5, 10, 2, 24, -1, -48]));
console.log(adjacentElementsProduct([-23, 4, -5, 99, -27, 329, -2, 7, -921]));
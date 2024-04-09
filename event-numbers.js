function evenNumbers(array, number) {

  const arrays = [];
  array = array.filter(arr => arr % 2 == 0);

  for (let i = array.length - 1; i > (array.length - 1) - number; i--) {
    if (array[i] != undefined) {
      arrays.unshift(array[i]);
    }
  }

  return arrays;

}

// console.log(evenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9], 3));
// console.log(evenNumbers([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2))
console.log(evenNumbers([47, -85, -91, 50, 33], 5));
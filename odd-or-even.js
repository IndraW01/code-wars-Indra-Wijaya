function oddOrEven(array) {
  let total = 0;
  array.forEach(val => {
    total += val;
  });

  return total % 2 == 0 ? 'even' : 'odd';
}

console.log(oddOrEven([0]))
console.log(oddOrEven([1]))
console.log(oddOrEven([0, -1, -5]))
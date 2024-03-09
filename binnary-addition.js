function addBinary(a, b) {
  const binner = [];

  let sumBinary = a + b;

  while (sumBinary > 0) {
    binner.push(sumBinary % 2);
    sumBinary = Math.floor(sumBinary / 2);
  }

  return binner.reverse().join('');
}

console.log(addBinary(24, 1));
// console.log(addBinary(5, 9));
function sumEvenNumbers(input) {
  // [...]
  return input.reduce((prev, current) => current % 2 == 0 ? prev + current : prev, 0);
}

console.log(sumEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
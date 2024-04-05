function getEvenNumbers(numbersArray) {
  // filter out the odd numbers
  return numbersArray.filter(val => val % 2 == 0);
}

console.log(getEvenNumbers([2, 4, 5, 6]));
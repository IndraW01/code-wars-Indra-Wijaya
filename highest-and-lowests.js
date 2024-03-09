function highAndLow(numbers) {
  const array = numbers.split(' ').map(number => parseInt(number));

  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[j] > array[j + 1]) {
        let tmp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = tmp;
      }
    }
  }

  return `${array[array.length - 1]} ${array[0]}`;
}

console.log(highAndLow("1 2 3 4 5"))
console.log(highAndLow("1 2 -3 4 5"))
console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4")) // "42 -9"
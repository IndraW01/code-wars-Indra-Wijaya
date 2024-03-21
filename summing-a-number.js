function sumDigits(number) {
  if (number < 0) {
    number = Math.abs(number);
  }

  const array = number.toString().split('');
  let result = 0;

  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
    result += parseInt(array[i]);
  }

  return result;

}

console.log(sumDigits(10));
// console.log(sumDigits(99));
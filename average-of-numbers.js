function averages(numbers) {
  const arrays = [];

  if (numbers == null || numbers.length < 1) return [];

  for (let i = 0; i < numbers.length; i++) {
    if (i + 1 == numbers.length) {
      break;
    }
    arrays.push((numbers[i] + numbers[i + 1]) / 2);
  }

  return arrays;
}

console.log(averages([2, 2, 2, 2, 2]));
// console.log(averages([]));
console.log(averages(null));
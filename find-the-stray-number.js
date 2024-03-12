function stray(numbers) {
  let result = 0;
  let same = false;
  for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers.length; j++) {
      if (i == j) {
        continue;
      }

      if (numbers[i] == numbers[j]) {
        same = true;
        break;
      }
    }

    if (same == true) {
      same = false;
    } else {
      result = numbers[i];

    }
  }

  return result;
}

console.log(stray([1, 2, 2]));
console.log(stray([1, 2, 1]));
console.log(stray([2, 1, 1]));
console.log(stray([17, 17, 3, 17, 17, 17, 17]));
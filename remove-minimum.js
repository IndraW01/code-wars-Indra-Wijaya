function removeSmallest(numbers) {
  const array = [];
  let change = false;

  for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers.length; j++) {
      if (i == j) {
        continue;
      }

      if (numbers[i] > numbers[j]) {
        change = true;
      }

      if (numbers[i] == numbers[j]) {
        if (i < j) {
          continue;
        } else {
          change = true;
        }
      }
    }

    if (change) {
      array.push(numbers[i]);
      change = false;
    }
  }
  return array;
}

console.log(removeSmallest([1, 2, 3, 4, 5]));
console.log(removeSmallest([5, 3, 2, 1, 4]))
console.log(removeSmallest([2, 2, 1, 2, 1]))
console.log(removeSmallest([]));
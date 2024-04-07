function largestPairSum(numbers) {
  //TODO: Write your Code here

  for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers.length; j++) {
      if (i == j) {
        continue;
      }

      if (numbers[i] < numbers[j]) {
        let tmp = numbers[j];
        numbers[j] = numbers[i];
        numbers[i] = tmp;
      }
    }
  }

  return numbers[numbers.length - 2] + numbers[numbers.length - 1];
}

console.log(largestPairSum([10, 14, 2, 23, 19]));
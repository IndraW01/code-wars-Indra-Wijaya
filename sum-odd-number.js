function rowSumOddNumbers(n) {
  let number = 1;
  let total = 0;

  for (let i = 1; i <= n; i++) {

    for (let j = 1; j <= i; j++) {
      if (i == n) {
        total += number
      }
      number += 2;
    }
  }

  return total;

}

// console.log(rowSumOddNumbers(1));
console.log(rowSumOddNumbers(2));
console.log(rowSumOddNumbers(3));
console.log(rowSumOddNumbers(42));
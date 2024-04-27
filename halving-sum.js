function halvingSum(n) {
  let sum = 0;
  let operator = 1;
  let bagi;

  while (true) {
    bagi = n / operator;

    operator += operator;

    if (Math.floor(bagi) < 1) {
      break;
    }
    sum += Math.floor(bagi);
  }

  return sum;
}

console.log(halvingSum(25));
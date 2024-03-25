function maxMultiple(divisor, bound) {
  //your code here
  for (let i = bound - 1; i > 0; i--) {
    if (i % divisor == 0) return i;
  }
}

console.log(maxMultiple(2, 7));
console.log(maxMultiple(3, 10));
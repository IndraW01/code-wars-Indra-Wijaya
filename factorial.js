function factorial(n) {
  // Calculate the factorial here
  if (n == 0) return 1;

  if (n < 0 || n > 12) throw RangeError();

  let result = n;
  for (let i = n - 1; i >= 1; i--) {
    result *= i;
  }

  return result;
}

console.log(factorial(0));
console.log(factorial(1));
console.log(factorial(2));
console.log(factorial(3));
console.log(factorial(5));
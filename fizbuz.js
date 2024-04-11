// Return an array
function fizzbuzz(n) {
  //
  const fizbuzz = [];

  for (let i = 1; i <= n; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      fizbuzz.push('FizzBuzz');
    } else if (i % 3 == 0) {
      fizbuzz.push('Fizz');
    } else if (i % 5 == 0) {
      fizbuzz.push('Buzz');
    } else {
      fizbuzz.push(i);
    }
  }

  return fizbuzz;
}

console.log(fizzbuzz(3));
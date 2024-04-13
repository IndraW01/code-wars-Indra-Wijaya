// Return the nth triangular number
function triangular( n ) {
  let sum = 0;

  if(n < 0) return 0;

  for(let i = 1; i <= n; i++) {
    sum += i;
  }

  return sum;
}

console.log(triangular(3));
console.log(triangular(4));
console.log(triangular(-454));
console.log(triangular(99783606));
console.log(triangular(79520456));
// 3161751500984196
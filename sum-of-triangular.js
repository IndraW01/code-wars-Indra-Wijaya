function sumTriangularNumbers(n) {  
  let sum = 0;
  let result = 0;
  
  for(let i = 1; i <= n; i++) {
    for(let j = 1; j <= i; j++) {
      sum += 1;
      if(i == j) {
        result += sum;
      }
    }
  }

  return result;
}

console.log(sumTriangularNumbers(6));
console.log(sumTriangularNumbers(-291));
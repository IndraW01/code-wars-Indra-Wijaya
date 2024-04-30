function strong(n) {
  n = n.toString().split('').map(val => parseInt(val));

  let factorial = [];
  let sum = 1;

  for (let i = 0; i < n.length; i++) {
    for (let j = 1; j <= n[i]; j++) {
      sum = sum * j;
    }

    factorial.push(sum);

    sum = 1;
  }

  return factorial.reduce((prev, current) => prev + current, 0) == parseInt(n.join('')) ? 'STRONG!!!!' : 'Not Strong !!';
}

console.log(strong(145));
console.log(strong(7));
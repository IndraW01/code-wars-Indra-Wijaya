function divisors(integer) {
  let prime = [];

  for (let i = 2; i < integer; i++) {
    if (integer % i == 0) {
      prime.push(i);
    }
  };

  return prime.length > 0 ? prime : `${integer} is prime`;
};

console.log(divisors(12));
console.log(divisors(25));
console.log(divisors(13));
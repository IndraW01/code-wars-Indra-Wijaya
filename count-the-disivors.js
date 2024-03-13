function getDivisorsCnt(n) {
  let hasil = 0;

  for (let i = 1; i <= n; i++) {
    if (n % i == 0) {
      hasil += 1;
    }
  }

  return hasil;
}

console.log(getDivisorsCnt(1));
console.log(getDivisorsCnt(4));
console.log(getDivisorsCnt(10));
console.log(getDivisorsCnt(11));
console.log(getDivisorsCnt(54));
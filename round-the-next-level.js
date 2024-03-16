function roundToNext5(n) {
  if (n % 5 === 0) {
    return n;
  } else {
    if (n < 0) {
      return n - (n % 5);
    } else {
      return n + (5 - (n % 5));
    }
  }
}

// console.log(roundToNext5(0));
// console.log(roundToNext5(2));
// console.log(roundToNext5(3));
// console.log(roundToNext5(12));
// console.log(roundToNext5(21));
// console.log(roundToNext5(30));
console.log(roundToNext5(-2));
// console.log(roundToNext5(-5));
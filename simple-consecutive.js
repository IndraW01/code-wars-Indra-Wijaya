function pairs(ar) {
  //..
  let pairs = 0;

  for (let i = 0; i < ar.length;) {
    if (ar[i] + 1 == ar[i + 1] || ar[i] - 1 == ar[i + 1]) {
      pairs += 1;
    }

    i = i + 2;
  }

  return pairs;
};

console.log(pairs([21, 20, 22, 40, 39, -56, 30, -55, 95, 94]));
console.log(pairs([1, 2, 5, 8, -4, -3, 7, 6, 5]));
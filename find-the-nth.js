var findDigit = function (num, nth) {
  num = Math.abs(num);

  if (nth <= 0) return -1;

  const split = num.toString().split('')

  if (split.length < nth) return 0;

  return parseInt(split[split.length - nth]);

}

console.log(findDigit(5673, 4));
console.log(findDigit(0, 20));

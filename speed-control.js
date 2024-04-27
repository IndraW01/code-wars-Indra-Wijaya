function gps(s, x) {
  // your code
  if(x.length < 2) {
    return 0;
  }

  const arr = [];
  let sum = 0;
  for(let i = 0; i < x.length; i++) {
    if(x[i] > x[i+1]) {
      sum = x[i] - x[i+1];
    } else {
      sum = x[i+1] - x[i];
    }

    if(i + 1 == x.length) {
      continue;
    } else {
      arr.push((3600 * sum) / s);
    }
    sum = 0;
  }

  return parseInt(Math.max(...arr));
}

console.log(gps(15, [0.0, 0.19, 0.5, 0.75, 1.0, 1.25, 1.5, 1.75, 2.0, 2.25]))
console.log(gps(19, [0.0, 0.2, 0.4, 0.69, 0.92, 1.15, 1.38, 1.61, 1.92, 2.16, 2.4, 2.64, 2.88, 3.12, 3.36]))
console.log(gps(19, [0.0]))
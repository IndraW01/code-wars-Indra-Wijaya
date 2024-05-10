function last(x) {
  x = x.split(' ');

  for (let i = 0; i < x.length; i++) {
    for (let j = i + 1; j < x.length; j++) {
      if (x[i][x[i].length - 1] === x[j][x[j].length - 1]) {
        if (x[i] > x[j]) {
          let tmp = x[j];
          x[j] = x[i];
          x[i] = tmp;
        }
      } else if (x[i][x[i].length - 1] > x[j][x[j].length - 1]) {
        let tmp = x[j];
        x[j] = x[i];
        x[i] = tmp;
      }
    }
  }

  return x;
}

console.log(last('man i need a taxi up to ubud'));
// console.log(last('what time are we climbing up the volcano'));
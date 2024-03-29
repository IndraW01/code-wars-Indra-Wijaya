function minValue(values) {
  //your code here
  for (let i = 0; i < values.length; i++) {
    for (let j = 0; j < values.length; j++) {
      if (i == j) {
        continue;
      }

      if (values[i] < values[j]) {
        let tmp = values[j];
        values[j] = values[i];
        values[i] = tmp;
      }
    }
  }

  return parseInt(values.filter((value, key) => values.indexOf(value) == key).join(''));
}

console.log(minValue([1, 3, 1]));
console.log(minValue([4, 7, 5, 7]));

console.log(minValue([3, 6, 5, 5, 9, 8, 7, 6, 3, 5, 9]));

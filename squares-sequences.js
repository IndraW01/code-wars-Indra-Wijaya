function squares(x, n) {
  const array = [];
  let square = x;

  if (n < 1) return [];

  for (let i = 0; i < n; i++) {
    array.push(square)

    square = square * square;
  }

  return array;

}

console.log(squares(2, 5));
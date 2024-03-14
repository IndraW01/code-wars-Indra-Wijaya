function nbDig(n, d) {
  const numbers = [];
  let search = 0;

  for (let i = 0; i <= n; i++) {
    numbers.push(i ** 2);
  }

  numbers.forEach(val => {
    const array = val.toString().split('');
    array.forEach(val => {
      if (val == d.toString()) {
        search += 1;
      }
    });
  })

  return search;
}

console.log(nbDig(25, 1));
console.log(nbDig(11011, 2));
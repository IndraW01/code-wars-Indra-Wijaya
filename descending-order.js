function descendingOrder(n) {
  const array = n.toString().split('').map(number => parseInt(number));

  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[j] < array[j + 1]) {
        let tmp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = tmp;
      }
    }
  }

  return parseInt(array.join(''));
}

console.log(descendingOrder(12345))
console.log(descendingOrder(123456789))
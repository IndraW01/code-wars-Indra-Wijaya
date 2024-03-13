function sortByLength(array) {
  let tmp;
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (i == j) {
        continue;
      }

      // console.log(array[i].length);
      if (array[i].length < array[j].length) {
        tmp = array[j];
        array[j] = array[i];
        array[i] = tmp;
      }
    }
  }

  return array;
}

console.log(sortByLength(["", "Moderately", "Brains", "Pizza"]));
function isSortedAndHow(array) {
  let sort = '';

  for (let i = 0; i < array.length; i++) {

    if (i + 1 === array.length) {
      break;
    }

    if (array[i] === array[i + 1]) {
      continue;
    }

    if (i === 0) {
      if (array[i] > array[i + 1]) {
        sort = 'desc';
      } else if (array[i] < array[i + 1]) {
        sort = 'asc';
      }
    }
    else {
      if (sort === 'desc') {
        if (array[i] > array[i + 1]) {
          continue;
        } else {
          return 'no';
        }
      } else if (sort === 'asc') {
        if (array[i] < array[i + 1]) {
          continue
        } else {
          return 'no';
        }
      }
    }

  }

  return sort == 'asc' ? 'yes, ascending' : 'yes, descending';
}

// console.log(isSortedAndHow([1, 3, 9, 4])); // Output: "no"
console.log(isSortedAndHow([1, 1]));
// console.log(isSortedAndHow([1, 2, 3, 3, 4]));

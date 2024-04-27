function findDeletedNumber(arr, mixArr) {
  // your code
  for (let i = 0; i < arr.length; i++) {
    if (mixArr.filter(val => val == arr[i]).length > 0) {
      continue;
    } else {
      return arr[i];
    }
  }

  return 0;
}

console.log(findDeletedNumber([1, 2, 3, 4, 5], [3, 4, 1, 5]));
console.log(findDeletedNumber([1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 9, 7, 4, 6, 2, 3, 8]));
console.log(findDeletedNumber([1, 2, 3, 4, 5, 6, 7, 8, 9], [5, 7, 6, 9, 4, 8, 1, 2, 3]));
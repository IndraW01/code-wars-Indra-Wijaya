function nthSmallest(arr, pos) {
  //your code here
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (i == j) {
        continue;
      }

      if (arr[i] < arr[j]) {
        let tmp = arr[j];
        arr[j] = arr[i];
        arr[i] = tmp;
      }
    }
  }

  return arr[pos - 1];
}

console.log(nthSmallest([3, 1, 2], 2));
console.log(nthSmallest([2, 1, 3, 3, 1, 2], 3));
console.log(nthSmallest([15, 20, 7, 10, 4, 3], 3));
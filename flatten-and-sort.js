"use strict";

function flattenAndSort(array) {
  // Good luck, brave code warrior!
  const arr = [];

  array.forEach(val => {
    return arr.push(...val);
  });

  for(let i = 0; i < arr.length; i++) {
    for(let j = 0; j < arr.length; j++) {
      if(i == j) {
        continue;
      }

      if(arr[i] < arr[j]) {
        let tmp = arr[j];
        arr[j] = arr[i];
        arr[i] = tmp;
      }
    }
  }

  return arr;
}

console.log(flattenAndSort([[3, 2, 1], [4, 6, 5], [], [9, 7, 8]]))
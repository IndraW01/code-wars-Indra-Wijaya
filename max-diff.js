function maxDiff(list) {
  if(list.length == 0) return 0;

  for(let i = 0; i < list.length; i++) {
    for(let j = 0; j < list.length; j++) {
      if(i == j) {
        continue;
      }

      if(list[i] < list[j]) {
        let tmp = list[j];
        list[j] = list[i];
        list[i] = tmp;
      }
    }
  }

  return list[list.length - 1] - list[0];
};

console.log(maxDiff([0, 1, 2, 3, 4, 5, 6]));
console.log(maxDiff([]));
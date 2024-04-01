function sumOfMinimums(arr) {
  // your code here
  const array = [];

  arr.forEach(val => {
    for(let i = 0; i < val.length; i++) {
      for(let j = 0; j < val.length; j++) {
        if(i == j) {
          continue;
        }
  
        if(val[i] < val[j]) {
          let tmp = val[j];
          val[j] = val[i];
          val[i] = tmp;
        }
      }
    }

    array.push(val[0]);
  });

  return array.reduce((prev, current) => prev + current);
}

console.log(sumOfMinimums([[7, 9, 8, 6, 2], [6, 3, 5, 4, 3], [5, 8, 7, 4, 5]]))
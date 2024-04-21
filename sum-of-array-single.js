function repeats(arr){
  //..
  const arrUnique = [];
  let find = false;

  for(let i = 0; i < arr.length; i++) {
    for(let j = 0; j < arr.length; j++) {
      if( i == j ) {
        continue;
      }

      if(arr[i] == arr[j]) {
        find = true;
      }
    }

    if(!find) {
      arrUnique.push(arr[i]);
    } else {
      find = false;
    }
  }

  return arrUnique.reduce((prev, curr) => prev + curr);
};

console.log(repeats([4,5,7,5,4,8]));
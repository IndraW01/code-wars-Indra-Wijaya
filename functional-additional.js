function add(n) {
  return function (i) {
    console.log(i)
    return n + i;
  }
}


var addThree = add(3);
console.log(addThree(1)); // 6
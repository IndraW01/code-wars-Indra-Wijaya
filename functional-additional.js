function add(n) {
  return function (i) {
    return n + i;
  }
}


var addThree = add(3);
console.log(addThree(1)); // 6
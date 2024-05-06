function menFromBoys(arr) {
  //your code here
  const boys = [];
  const mens = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      boys.push(arr[i]);
    } else {
      mens.push(arr[i]);
    }

  }

  const duplicate = [...boys.sort((a, b) => a - b), ...mens.sort((a, b) => b - a)]

  return duplicate.filter((value, index, self) => {
    return self.indexOf(value) === index;
  });

}

// console.log(menFromBoys([82, 91, 72, 76, 76, 100, 85]));
console.log(menFromBoys([-21, -257, 44, -437, -13, 583, 0, -466, 75, 856, 727, -705, -889, 30, 573, 436, 10, -239, 89, -990, 14, -735, 87, -4, 36, 465, -90, -89, -19, -51]))
function predictAge(age1, age2, age3, age4, age5, age6, age7, age8) {
  // your code
  return Math.floor(Math.sqrt((age1 ** 2) + (age2 ** 2) + (age3 ** 2) + (age4 ** 2) + (age5 ** 2) + (age6 ** 2) + (age7 ** 2) + (age8 ** 2)) / 2);



}


console.log(predictAge(65, 60, 75, 55, 60, 63, 64, 45));
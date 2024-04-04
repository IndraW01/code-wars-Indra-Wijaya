function isLeapYear(year) {
  // TODO

  if (year % 400 == 0) return true;

  if (year % 4 == 0 && year % 100 != 0) return true;

  return false;
}

console.log(isLeapYear(2020));
console.log(isLeapYear(2000));
console.log(isLeapYear(2015));
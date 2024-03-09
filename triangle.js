function isTriangle(a, b, c) {
  if (a > 0 && b > 0 && c > 0 && a + b > c && a + c > b && b + c > a) return true;
  return false;

}

console.log(isTriangle(1, 2, 2));
console.log(isTriangle(-5, 1, 3));
console.log(isTriangle(1, 8, 7));
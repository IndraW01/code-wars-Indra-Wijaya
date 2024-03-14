function calculateYears(principal, interest, tax, desired) {
  // your code
  let year = 0;
  for (principal; principal < desired;) {
    year += 1;

    let jumlah = principal + (principal * interest) - (principal * interest * tax);

    principal = jumlah;
  }

  return year;
}

console.log(calculateYears(1000, 0.05, 0.18, 1100)); // 3
console.log(calculateYears(1000, 0.01625, 0.18, 1200)); // 14
function arithmetic(a, b, operator) {
  return operator == "add" ? a + b : operator == "subtract" ? a - b : operator == "multiply" ? a * b : a / b;

}

console.log(arithmetic(1, 2, "add"));
console.log(arithmetic(8, 2, "subtract"))
console.log(arithmetic(5, 2, "multiply"));
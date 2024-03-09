function validatePIN(pin) {
  return /^(\d{4}|\d{6})$/.test(pin);
}

console.log(validatePIN("1234"))
// console.log(validatePIN("12345"))
// console.log(validatePIN("a234"))
// console.log(validatePIN("-1.234"))
// console.log(validatePIN("1.234"))
console.log(validatePIN("12.0"))
console.log(validatePIN("5I5596"))
console.log(validatePIN('0000'))
console.log(validatePIN('098765'));
function spacify(str) {
  // return 
  return str.split('').map((val, index) => index == str.split('').length - 1 ? val : `${val} `).join('');
}

console.log(spacify('hello world'))
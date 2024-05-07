function vaporcode(string) {
  string = string.split(" ").join('').split('');
  return string.map((str, index) => {
    if (index == string.length - 1) {
      return str;
    } else {
      return `${str}` + '  '
    }
  }).join('').toUpperCase();
}

console.log(vaporcode('Lets go to the movies'));
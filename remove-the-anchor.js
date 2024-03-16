function removeUrlAnchor(url) {
  // TODO: complete
  const array = [];
  for (let i = 0; i < url.length; i++) {
    if (url[i] == '#') {
      break;
    } else {
      array.push(url[i]);
    }
  }

  return array.join('');
}

console.log(removeUrlAnchor("www.codewars.com#about"))
console.log(removeUrlAnchor("www.codewars.com?page=1"));
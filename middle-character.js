function getMiddle(s) {
  const tengah = Math.floor(s.length / 2);

  if (s.length % 2 === 0) {
    return s.slice(tengah - 1, tengah + 1);
  } else {
    return s.slice(tengah, tengah + 1);
  }

}

// console.log(getMiddle('test'))
console.log(getMiddle('testing'))
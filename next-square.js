function findNextSquare(sq) {
  const squart = Math.sqrt(sq);
  console.log(squart);

  if (Number.isInteger(squart)) {
    return Math.pow(squart + 1, 2);
  } else {
    return -1;
  }
}

console.log(findNextSquare(121));
console.log(findNextSquare(319225));
console.log(findNextSquare(342786627))
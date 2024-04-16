function generateShape(integer){
  let square = '';

  for(let i = 0; i < integer; i++) {
    for(let j = 0; j < integer; j++) {
      square += '+';
    }

    if(i < integer - 1) {
      square += '\n'
    }
  }

  return square;
}

console.log(generateShape(3));
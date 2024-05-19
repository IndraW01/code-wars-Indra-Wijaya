function explode(s) {
  return s.split('').map(val => {
    let str = '';
    for (let i = 0; i < parseInt(val); i++) {
      str += val;
    }

    return str
  }).join('');
}

console.log(explode('312'))
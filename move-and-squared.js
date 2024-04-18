function vertMirror(strng) {
  // Your code
  const stringSplit = strng.split('\n');
  const mirror = [];
  let val;

  for(let i = 0; i < stringSplit.length; i++) {
    val = stringSplit[i];

    let sort = '';
    for(let j = val.length - 1; j >= 0; j-- ) {
      sort += val[j];
    }
    mirror.push(sort);
    sort = '';
  }

  return mirror.join('\n');
}
function horMirror(strng) {
  // Your code
  const stringSplit = strng.split('\n');
  const mirror = [];
  for(let i = stringSplit.length - 1; i >= 0; i--) {
    mirror.push(stringSplit[i]);
  }

  return mirror.join('\n');
}
function oper(fct, s) {
  // Your code
  return fct(s);
}

let s = "abcd\nefgh\nijkl\nmnop";

console.log(oper(vertMirror, s));
console.log(oper(horMirror, s));
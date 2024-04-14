function switcheroo(x){
  return x.split('').map(val => val == 'a' ? 'b' : (val == 'b' ? 'a' : 'c')).join('');
}

console.log(switcheroo('abc'));
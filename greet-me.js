var greet = function(name) {
  let say = 'Hello ';

  for(let i = 0; i < name.length; i++) {
    if(i == 0) {
      say += name[i].toUpperCase();
    } else {
      say += name[i].toLowerCase();
    }
  }

  say += '!';

  return say;
};

console.log(greet('riley'));
console.log(greet('JACK'));
function divCon(x){

  let numInt = 0;
  let numStr = 0;

  for(let i = 0; i < x.length; i++) {
    if(Number.isInteger(x[i])) {
      numInt += x[i];
    } else {
      numStr += parseInt(x[i]);
    }
  }

  return numInt - numStr;

}

console.log(divCon([9, 3, '7', '3']));
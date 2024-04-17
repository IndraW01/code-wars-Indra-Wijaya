function toNumberArray(stringarray){
  return stringarray.map(val => parseFloat(val));
}

console.log(toNumberArray(["1.1","2.2","3.3"]));
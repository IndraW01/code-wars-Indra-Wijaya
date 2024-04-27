function inviteMoreWomen(L) {
  //coding and coding..
  return L.filter(val => val == 1).length > L.filter(val => val == -1).length ? true : false;

}

console.log(inviteMoreWomen([1, -1, 1]));
console.log(inviteMoreWomen([1, -1]));
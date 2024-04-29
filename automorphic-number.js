function automorphic(n) {
  //your code here
  let kuadrat = (n * n).toString().split('');
  let bil = [];


  for (let i = kuadrat.length - 1; i >= kuadrat.length - n.toString().split('').length; i--) {
    bil.unshift(kuadrat[i]);
  }

  bil = parseInt(bil.join(''));
  return bil == n ? 'Automorphic' : 'Not!!';
}

console.log(automorphic(25));
console.log(automorphic(76));
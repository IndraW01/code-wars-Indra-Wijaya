function getCount(str) {
  let total = 0;
  for(const string of str) {
    if(string == 'a' || string == 'e' || string == 'i' || string == 'o' || string == 'u') {
      total += 1;
    }
  }
  
  console.info(total);
  
}

getCount('abracadabra');
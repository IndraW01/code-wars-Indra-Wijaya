function countDevelopers(list) {
  // your awesome code here :)

  const filter = list.filter((val) => {
    if (val.language == 'JavaScript' && val.continent == 'Europe') {
      return val;
    }
  }).length

  return filter > 0 ? filter : 0;
}

var list1 = [
  { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'JavaScript' },
  { firstName: 'Maia', lastName: 'S.', country: 'Tahiti', continent: 'Oceania', age: 28, language: 'JavaScript' },
  { firstName: 'Shufen', lastName: 'L.', country: 'Taiwan', continent: 'Asia', age: 35, language: 'HTML' },
  { firstName: 'Sumayah', lastName: 'M.', country: 'Tajikistan', continent: 'Asia', age: 30, language: 'CSS' }
];


console.log(countDevelopers(list1));
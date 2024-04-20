function isRubyComing(list) {
  // thank you for checking out my kata :)
  return list.filter(val => val.language == 'Ruby').length > 0 ? true : false;
}

let list1 = [
  { firstName: 'Sofia', lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java' },
  { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python' },
  { firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby' } 
];

console.log(isRubyComing(list1));
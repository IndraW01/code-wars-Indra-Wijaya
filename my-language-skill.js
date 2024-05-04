function myLanguages(results) {
  let object = {};
  let arrayValue = Object.values(results).filter(val => val >= 60).sort((a, b) => b - a);
  console.log(arrayValue);

  arrayValue.forEach(val => {
    for (const key in results) {
      if (results[key] == val) {
        console.log(key);
        object[key] = results[key];
      }
    }
  });

  return Object.keys(object);
}

// console.log(myLanguages({ "Java": 10, "Ruby": 60, "Python": 65 }));
console.log(myLanguages({ "Hindi": 60, "Greek": 71, "Dutch": 93 }));
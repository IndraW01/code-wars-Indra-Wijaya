// write the function isAnagram
var isAnagram = function (test, original) {
  if (test.length != original.length) return false;

  let testLower = test.toLowerCase().split('');
  let originalLower = original.toLowerCase().split('');

  // const arrTest = [];
  // const arrOriginar = [];

  for (let i = 0; i < testLower.length; i++) {
    for (let j = 0; j < testLower.length; j++) {
      if (i == j) {
        continue;
      }

      if (testLower[i] < testLower[j]) {
        let tmp = testLower[j];
        testLower[j] = testLower[i];
        testLower[i] = tmp
      }

      if (originalLower[i] < originalLower[j]) {
        let tmp = originalLower[j];
        originalLower[j] = originalLower[i];
        originalLower[i] = tmp
      }
    }
  }

  return testLower.join('') == originalLower.join('');
};

console.log(isAnagram('foefet', 'toffee'));
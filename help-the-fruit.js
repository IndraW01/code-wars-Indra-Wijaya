function removeRotten(bagOfFruits) {
  // ...
  if (bagOfFruits == null || bagOfFruits.length < 1) return [];

  return bagOfFruits.map(val => {
    if (val.includes('rotten')) {
      return val.split('rotten')[1].toLowerCase();
    }

    return val;
  });
}

console.log(removeRotten(["apple", "rottenBanana", "kiwi", "melone", "orange"]));
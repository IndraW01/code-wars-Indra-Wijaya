function solution(str, ending) {
  if (ending.length < 1) return true;

  const strSlice = str.slice(-Math.abs(ending.length));

  if (strSlice == ending) return true;
  return false;
}

console.log(solution('abc', 'bc'))
console.log(solution('abc', 'd'))
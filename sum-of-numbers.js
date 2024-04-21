var SequenceSum = (function() {
  function SequenceSum() {

  }

  SequenceSum.showSequence = function(count) {
    // for
      //while
      let result = 0;
      let string = '';

      if(count < 0) {
        return `${count}<0`;
      };

      if(count == 0) {
        return `${count}=0`;
      };

      for(let i = 0; i <= count; i++) {
        if(i == count) {
          string += `${i}`;
        } else {
          string += `${i}+`;
        }

        result += i ;
      }

      return string += ` = ${result}`;
  };

  return SequenceSum;

})();

// console.log(SequenceSum.showSequence(6));
console.log(SequenceSum.showSequence(15));
console.log(SequenceSum.showSequence(0));
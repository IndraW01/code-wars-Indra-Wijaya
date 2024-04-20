function solve(arr){  
  //code
  const obj = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
    g: 7,
    h: 8,
    i: 9,
    j: 10,
    k: 11,
    l: 12,
    m: 13,
    n: 14,
    o: 15,
    p: 16,
    q: 17,
    r: 18,
    s: 19,
    t: 20,
    u: 21,
    v: 22,
    w: 23,
    x: 24,
    y: 25,
    z: 26
  };

  let val;
  let sum = 0;
  let result = [];

  for(let i = 0; i < arr.length; i++) {
    val = arr[i].toLowerCase();
    for(let j = 0; j < val.length; j++ ) {
      if(obj[val[j]] == j + 1) {
        sum += 1;
      }
    }

    result.push(sum);
    sum = 0;
  }

  return result;
};

console.log(solve(["abode","ABc","xyzD"]));
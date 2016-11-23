// Faster linear time solution. 
// Looks up prior sum comparisons in constant time.
const sum_pairs = function(ints, s) {
  let cache = {},
    len = ints.length,
    i;

  for (i = 0; i < len; i++) {

    if (ints[i] < 0 && cache[Math.abs(ints[i]) + s]) {
     if(i !== cache[Math.abs(ints[i]) + s][1]) return [cache[Math.abs(ints[i]) + s][0], ints[i]];
    }

    if (ints[i] >= 0 && cache[s - ints[i]]) {
      if(i !== cache[s - ints[i]][1]) return [cache[s - ints[i]][0], ints[i]];
    }

    if (!cache[ints[i]]) {
      cache[ints[i]] = [ints[i], i];
    }
  }

}

// shorter version
let sum_pairs= (a, s) => {
  let mem = {};
  for(x of a) 
    if(mem[s - x])
      return [s - x, x];
    else 
      mem[x] = 1;
}

// console.log(sum_pairs([10, 5, 2, 3, 7, 5], 10)) //[3, 7]
// console.log(sum_pairs([0, 0, -2, 3], 2)) //undefined
// console.log(2 - (-2))
// console.log(sum_pairs([4, 3, 2, 3, 4], 6)) //[4,2]
// console.log(sum_pairs([11, 3, 7, 5], 10)) //[3,7]

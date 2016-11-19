//still not passing 10million element test
var sum_pairs = function(ints, s) {
  let i, index, len = ints.length,
    min = Infinity,
    pair,
    visited = [];

  for (i = 0; i < len; i++) {

    index = ints[i] >= 0 ? ints.lastIndexOf(s - ints[i]) : ints.lastIndexOf(ints[i] + s);
    if (index > -1 && i !== index) {
      min = Math.min(min, index);

      if (min === index) pair = [ints[i], ints[index]];
      ints.splice(i, 1);
      ints.splice(index, 1);
      i--;
    }

  }

  return pair;
};

// console.log(sum_pairs([10, 5, 2, 3, 7, 5], 10)) //[3, 7]
// console.log(sum_pairs([0, 0, -2, 3], 2)) //undefined
// console.log(sum_pairs([4, 3, 2, 3, 4], 6)) //[4,2]
console.log(sum_pairs([11, 3, 7, 5], 10)) //[3,7]

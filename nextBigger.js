// nextBigger(12) == 21
// nextBigger(513) == 531
// nextBigger(2017) == 2071
//
// nextBigger(9) == -1
// nextBigger(111) == -1
// nextBigger(531) == -1

// not correct, need recursive function that orders permutations
// and then returns permutation that is just bigger than input.
function nextBigger(num) {
  if (num < 12) return -1;
  let str = '' + num;
  let i;

  for (let i = str.length - 1; i > 0; i--) {
    if (+(str[i] + str[i - 1]) > +(str[i - 1] + str[i])) {
      return +(str.substring(0, i - 1) + (str[i] + str[i - 1]) + str.substring(i + 1));
    }

  }

  return -1;
}

// console.log([1,2,3].sort((a,b) => b - a))
module.exports = nextBigger;

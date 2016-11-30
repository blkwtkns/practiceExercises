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

  let bar;
  for (i = str.length - 2; i >= 0; i--) {
    bar = inspect(str[i], str.substring(i + 1));
    if (bar) return +(str.substring(0, i) + bar);
  }

  function inspect(subj, obj) {
    let sorted = obj
      .split('')
      .sort((a, b) => +a - +b);

    let j;
    let len = sorted.length;
    for (j = 0; j < len; j++) {
      if (+subj < +sorted[j]) return sorted.splice(j, 1, subj) + sorted.join('');
    }

    return false;
  }

  return -1;
}

// console.log(nextBigger(12));
module.exports = nextBigger;

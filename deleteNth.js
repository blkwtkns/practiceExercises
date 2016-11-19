function deleteNth(arr, x) {
  // ...
  let cache = {};
  return arr.filter(el => {
    if (cache[el]) {
      cache[el]++;
    } else {
      cache[el] = 1;
    }
    return cache[el] <= x;
  })
}

// console.log(deleteNth([1, 1, 1, 1], 2)) // return [1,1]
// console.log(deleteNth([20, 37, 20, 21], 1)) // return [20,37,21]


// gkucmierz's solution
function longestSlideDown (pyramid) {
  return pyramid.reverse().reduce(function(lng, shrt) {
    return shrt.map(function(num, i) {
      return num + Math.max(lng[i], lng[i+1]);
    });
  })[0];
}

console.log(longestSlideDown(
  [
    [3],
    [7, 4],
    [2, 4, 6],
    [8, 5, 9, 3]
  ])); // 23, "should work for small pyramids"

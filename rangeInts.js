function solution(list) {
  if(!list.length) return 'empty list';

  let ranges = [],
    result = [],
    slice = list.slice();

  while (slice.length) {
    if(isNaN(slice[0]) || typeof slice[0] !== 'number') return 'invalid list';
    if (slice[0] === slice[1] - 1) {
      ranges.push(slice.shift());
    } else {
      if (slice[0] - 1 === ranges[ranges.length - 1]) {
        ranges.push(slice.shift());
        result.push(ranges);
        ranges = [];
      } else {
        if (ranges.length) result.push(ranges), ranges = [];
        result.push(slice.shift());
      }
    }
  }

  return result.map((ele) => {
    if (Array.isArray(ele) && ele.length > 2) return ele[0] + '-' + ele[ele.length - 1];
    if (Array.isArray(ele) && ele.length === 2) return ele.join(',');
    else return ele.toString();
  }).join(',');
}

// function solution(list){
  // var arr = [];
  // for (var i = 0; i < list.length; i++) {
    // var num1 = list[i];
    // var num2 = num1;
    // while (i < list.length && list[i + 1] === num2 + 1) {
      // i++;
      // num2++;
    // }
    // if (num1 === num2) {
      // arr.push(num1);
    // } else if (num1 + 1 === num2) {
      // arr.push(num1, num2);
    // } else {
      // arr.push(num1+"-"+num2);
    // }
  // }
  // return arr.join(",");
// }

// console.log(solution([-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]));
// console.log(solution([1, 2, 3]))
// returns "-6,-3-1,3-5,7-11,14,15,17-20"

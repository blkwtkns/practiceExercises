function sometimes(fn) {
  // your code goes here
  let count = 1;
  return (...args) => {
    if (count <= 3 || count % 2 === 1) {
      count++;
      return fn.apply(null, args);
    }

    count++;
    return `hmm, I don't know!`;
  }
}

// other solutions
//
// const sometimes = fn => {
//   let i = 0;
//   return (...args) => ++i && (i < 3 || i % 2) ? fn(...args) : "hmm, I don't know!";
// }

// function sometimes(fn){
//   var i = 0;
//   return function(){
//     return ++i && (i < 3 || i % 2) ? fn.apply(0, arguments) : "hmm, I don't know!";
//   }
// }

// function add (a, b) {
//     return a + b;
// }

// var s = sometimes(add);

// The first 3 tmes we call s it returns add's expected output
// s(4, 6) // returns 10
// s(3, 6) // returns 9
// s(2, 6) // returns 8
// s(1, 6) // returns 8
// s(5, 6) // returns 8
// s(8, 6) // returns 8
//
// console.log(s(7, 6));

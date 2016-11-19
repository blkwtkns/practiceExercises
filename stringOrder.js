function order(words) {
  // ...
  return words ? words.split(' ').sort((a, b) => {
    return a.match(/[0-9]/g) - b.match(/[0-9]/g);
  }).join(' ') : ''
  
}


// console.log(order("is2 Thi1s T4est 3a")) //"Thi1s is2 3a T4est"
// console.log(order(''))

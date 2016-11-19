function hammingWeight(x){
  // ...
  let weight = 0;
  let shifter = x;
  while (shifter !== 0){
    if(shifter % 2 !== 0) weight++;
    shifter >>= 1;
  }
  return weight;
}

// console.log(hammingWeight(21))


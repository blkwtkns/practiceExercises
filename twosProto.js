Number.prototype.twos = function(n) {
  //You may assume for this excercise that  n >= 2... 

  let bits = this.toString(2);
  let pad = '0';
  let neg = bits[0] === '-' ? true : false;
  if (neg) {
    bits = bits.substring(1);
    pad = '1';
  }
  while (bits.length < n) bits = pad + bits;
  return bits;
}

// clever solution
/* Number.prototype.twos = function(m){
 *   return (this+(2<<(m-1))).toString(2).substr(-m)
 * } 
 * */

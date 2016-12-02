// Extend the String object with toBase64() and fromBase64() functions
// Long way
// String.prototype.toBase64 = function(){
  // return this
    // .split('')
    // .map(el => el.charCodeAt())
    // .map(el => el.toString(2))
    // .map(el => {
      // let len = el.length;
      // let amend = '0';
      // let result = el;
      // while(len < 8) result = amend + result;
      // return result;
    // })
    // .map((el, idx, arr) => {
      // if(idx % 5 === 0) return arr.slice(idx - 5, idx + 1).join('')
    // })
    // .map(el => parseInt(el, 2))
// }

// Short way
// Extend the String object with toBase64() and fromBase64() functions
String.prototype.toBase64 = function(){
  return (new Buffer(this + '')).toString('base64');
}

String.prototype.fromBase64 = function(){
  return (new Buffer((this + ''), 'base64').toString('ascii'));
}

module.exports = String;


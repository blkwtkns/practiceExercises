var Morse = {};

Morse.encode = function (message) {
  // ·–·–·– ·–·–·– ·–·–·–
  let bin = '';
  for (let i = 0; i < message.length; i++) {
    bin += Morse.alpha[message[i].toUpperCase()];
    if (message[i + 1] !== ' ' && message[i] !== ' ') bin += '000';
  }

  let pads = bin.length < 32 ? 32 - bin.length : bin.length % 32;

  if (pads) {
    for (let j = 0; j < pads; j++) {
      bin += '0';
    }
  }

  let binArray = [];
  let init = 0;
  for (let k = 0; k < bin.length; k++) {
    if ((k + 1) - init === 32) binArray.push(binCovert(bin.substring(init, k + 1))), init = k + 1;
  }

  function binCovert(binStr) {
    let sign = binStr[0] === '1' ? '-' : '';
    let numBin = parseInt(binStr, 2);
    return +(sign + (Math.pow(2, 32) - numBin));
  }

  return binArray;

};

Morse.decode = function (integerArray) {
  // ·–·–·– ·–·–·– ·–·–·–
  let converted = integerArray.map(ele => intConvert(ele)).join('');
  let tempStr = converted;
  let preMorse = [];

  function intConvert(num) {
    return (Math.pow(2, 32) + num).toString(2);
  }

  function padOut(str) {
    let idx = str.length - 1;
    while (str[idx] === '0') --idx;
    return str.substring(0, idx + 1);
  }

  function separate(str, separator) {
    let arr = [];
    let temp = str;
    let len = separator.length;

    while (temp.indexOf(separator) > -1) {
      arr.push(temp.substring(0, temp.indexOf(separator)));
      temp = temp.substring(temp.indexOf(separator) + len);
      if (temp.indexOf(separator) < 0) arr.push(temp);
    }

    return arr;
  }

  function convertToUTF(bin) {
    for (let k in Morse.alpha) {
      if (Morse.alpha[k] === bin) return k;
    }
  }

  return separate(padOut(tempStr), '0000000')
    .map(el => separate(el, '000')
      .map(ele => convertToUTF(ele))
      .join(''))
    .join(' ');

};

Morse.alpha = {
  A: '10111',
  B: '111010101',
  C: '11101011101',
  D: '1110101',
  E: '1',
  F: '101011101',
  G: '111011101',
  H: '1010101',
  I: '101',
  J: '1011101110111',
  K: '111010111',
  L: '101110101',
  M: '1110111',
  N: '11101',
  O: '11101110111',
  P: '10111011101',
  Q: '1110111010111',
  R: '1011101',
  S: '10101',
  T: '111',
  U: '1010111',
  V: '101010111',
  W: '101110111',
  X: '11101010111',
  Y: '1110101110111',
  Z: '11101110101',
  0: '1110111011101110111',
  1: '10111011101110111',
  2: '101011101110111',
  3: '1010101110111',
  4: '10101010111',
  5: '101010101',
  6: '11101010101',
  7: '1110111010101',
  8: '111011101110101',
  9: '11101110111011101',
  '.': '10111010111010111',
  ',': '1110111010101110111',
  '?': '101011101110101',
  "'": '1011101110111011101',
  '!': '1110101110101110111',
  '/': '1110101011101',
  '(': '111010111011101',
  ')': '1110101110111010111',
  '&': '10111010101',
  ':': '11101110111010101',
  ';': '11101011101011101',
  '=': '1110101010111',
  '+': '1011101011101',
  '-': '111010101010111',
  '_': '10101110111010111',
  '"': '101110101011101',
  '$': '10101011101010111',
  '@': '10111011101011101',
  ' ': '0000000' // Technically is 7 0-bits, but we assume that a space will always be between two other characters
};


// Test.assertSimilar(Morse.encode('HELLO WORLD'), [-1440552402, -1547992901, -1896993141, -1461059584]);
// Test.assertEquals(Morse.decode([-1440552402, -1547992901, -1896993141, -1461059584]), 'HELLO WORLD');
// Test.assertSimilar(Morse.encode('EEEEEEEIE'), [-2004318070, 536870912]);
// Test.assertSimilar(Morse.decode([-2004318070, 536870912]), 'EEEEEEEIE');
// Test.assertEquals(Morse.decode([-298086688]), 'MMM', 'Numbers must be converted into 32-bit integers. Try using a bitwise operator to force the conversion.');
// Test.assertEquals(Morse.decode([3996880608]), 'MMM', 'Numbers must be converted into 32-bit integers. Try using a bitwise operator to force the conversion.');

console.log(Morse.decode([-1440552402, -1547992901, -1896993141, -1461059584]));

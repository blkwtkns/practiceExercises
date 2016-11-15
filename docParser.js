function DocumentParser(reader) {
  this.reader = reader;
  this.reset();
}

DocumentParser.prototype.reset = function() {
  this.wordCount = 0;
  this.charCount = 0;
  this.lineCount = 0;
};

DocumentParser.prototype.parse = function() {
  // TODO: Code Here!
  let chunks = [null];
  while (chunks[chunks.length - 1] !== '') {
    chunks.push(this.reader.getChunk());
  }

  chunks.splice(0, 1)
  chunks.splice(chunks.length - 1);

  if (chunks.length) {
    chunks = chunks.join('').split('\n');
    this.lineCount = chunks
      .length;

    this.charCount = chunks
      .join('')
      .length;

    this.wordCount = chunks
      .map(el => el.split(' '))
      .reduce((p, c) => p.concat(c))
      .filter(ele => Array.prototype.some.call(ele, el => el !== '' || el !== ' '))
      .length

    //       .join(' ')
    //       .split(' ')
    //       .filter(ele => Array.prototype.some.call(ele, el => el !== '' || el !== ' '))
    //       .length;

  } else {
    this.reset();
  }

};

// let chunks = ['O', 'n', 'c', 'e', ' ', 'u', 'p', 'o', 'n', ' ', 'a', ' ', 't', 'i', 'm', 'e'];
let chunks = ['On', 'ce upon a time\nThere was a boy and a girl.\nAnd they lived happily ', 'ever', ' aft', 'er', '.']
chunks = chunks.join('') //.split('\n');
// let baz = chunks
// let newCount = 1;
// let lineIdx;
// while (baz.includes('\n')) {
  // newCount++;
  // lineIdx = baz.indexOf('\n');
  // baz = baz.substring(0, lineIdx) + ' ' + baz.substring(lineIdx + 1);
// }

// let charLen = baz.length - newCount + 1;

// baz.split(' ')
  // .filter(ele => ele.split('').some(el => el !== '' || el !== ' '))
  // .length;



console.log(chunks[16] === '\n')
// console.log(baz.includes('\n'))
// console.log(baz.indexOf('\n'))
// console.log(baz.length - newCount + 1);
// console.log(newCount);
// console.log(baz.split(' '))

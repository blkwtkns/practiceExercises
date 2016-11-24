let assert = require('chai').assert;

let nextBigger;

try {
  nextBigger = require('../nextBigger.js');
} catch (e) {
  console.log('nextBigger could not be tested');
}

if (typeof nextBigger === 'function') {

  describe('nextBigger test', () => {

    it('equals next bigger number', () => {
      assert.equal(nextBigger(12), 21);
      assert.equal(nextBigger(513), 531);
      assert.equal(nextBigger(2017), 2071);
    });

    it('returns -1 if there is no bigger number', () => {
      assert.equal(nextBigger(9), -1);
      assert.equal(nextBigger(111), -1);
      assert.equal(nextBigger(531), -1);
    });
  });

} else {
  console.log('nextBigger was not exported properly');
}

let chai = require('chai');
let assert = chai.assert;
let bestProfit;

try {
  bestProfit = require('../stocks.js');
} catch (e) {
  console.log('stocks could not be tested');
}

if (typeof bestProfit === 'function') {

  describe('apple-stocks test', () => {

    it('should be highest profit gain', () => {
      assert.equal(bestProfit([5, 4, 8, 9, 2]), 5);
      assert.equal(bestProfit([1, 6, 15, 4, 9, 3, 22]), 21);
      assert.equal(bestProfit([8, 5, 4, 3, 2, 9, 2]), 7);
    });

    it('should return 0 if no profit is possible OR input is invalid', () => {
      assert.equal(bestProfit([40, 35, 30, 25, 20, 15, 10, 5]), 0);
      assert.equal(bestProfit([]), 0);
      assert.equal(bestProfit(), 0);
    });

  });
} else {
  console.log('stocks was not exported properly');
}

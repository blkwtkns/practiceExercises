let expect = require('expect.js');
let bestProfit;

try {
  bestProfit = require('../stocks.js');
} catch (e) {
  console.log('stocks could not be tested');
}

if (typeof bestProfit === 'function') {

  describe('apple-stocks test', () => {

    it('should be highest profit gain', () => {
      expect(bestProfit([5, 4, 8, 9, 2])).to.be(5);
      expect(bestProfit([1, 6, 15, 4, 9, 3, 22])).to.be(21);
      expect(bestProfit([8, 5, 4, 3, 2, 9, 2])).to.be(7);
    });

    it('should return 0 if no profit is possible OR input is invalid', () => {
      expect(bestProfit([40, 35, 30, 25, 20, 15, 10, 5])).to.be(0);
      expect(bestProfit([])).to.be(0);
      expect(bestProfit()).to.be(0);
    });

  });
} else {
  console.log('stocks was not exported properly');
}

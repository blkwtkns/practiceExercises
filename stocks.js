function getMaxProfit(prices) {

  if(!arguments.length) return 0;
  let max = -Infinity, min = prices[0];
  prices.forEach((el, idx) => {
    if (idx >= 1) {
      if (prices[idx + 1] > el && el < min) min = el;
      if (prices[idx - 1] < el && el > max) max = el;
    }
  })

  return max > 0 ? max - min : 0;
}

// let stock_prices_yesterday = [10, 7, 5, 8, 11, 9];
// let price1 = [5, 4, 8, 9, 2]
// let price2 = [1, 6, 15, 4, 9, 3, 22]
// let price3 = [8, 5, 4, 3, 2, 9, 2]
// let price4 = [40,35,30,25,20,15,10,5]
// let price5 = [];
// console.log(getMaxProfit(price5));
// returns 6 (buying for $5 and selling for $11)

module.exports = getMaxProfit;

/**
* Greedy Algorithm (maximum daily profit from stock sale) - "let me see what my options are, first..."
*
* Overview:
* ---------
* By using Greedy Algorithms we can pass over the data once (O(n) time), storing values we find to be optimal, per our criteria, by
* comparing them to current values. We have to go over the entire set to do this, but we only have to do it once - yay!
* 
* From Wikipedia: "A greedy algorithm is an algorithm that follows the problem solving heuristic of making the locally optimal
* choice at each stage with the hope of finding a global optimum."
*
* NOTE: This is my take on an interview answer to question taken from: https://www.interviewcake.com/question/javascript/stock-price
*
* @param pricesArr {arr}
* @returns int
*/
const getMaxProfit = (pricesArr) => {
    // make sure we have at least 2 prices
    if (stockPricesYesterday.length < 2) {
        throw new Error('Getting a profit requires at least 2 prices');
    }

    // init our first possible "buy price" (minPrice)
    var minPrice = pricesArr[0]
    // init our first possible maxProfit
    // the first 2 values in our array that can derive a profit figure
    // subtract our first "sell" price from our first "buy" price
    var maxProfit = pricesArr[1] - pricesArr[0]
    // init minIndex for comparisons on where we last set our minPrice
    var minIndex = 0

    // begin at 1, since we already have our first
    for (var i = 1, length = pricesArr.length; i < length; ++i) {
        if (pricesArr[i] - minPrice > maxProfit) {
            maxProfit = pricesArr[i] - minPrice
        }

        // set new minPrice: if our current price is lower than our 
        // set minimum price of the day, then set the new minimum price
        // to equal that of the current price
        // NOTE: we check to eliminate the last price of day from being set, as the day is over
        if (pricesArr[i] < minPrice && i !== length - 1) {
            minPrice = pricesArr[i]
            minIndex = i
        }
    }

    return maxProfit
}

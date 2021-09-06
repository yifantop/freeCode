/**
 * 买卖股票获得最大利润（只买卖一次）类似动态规划，但不需要dp
 * @param {number[]} prices
 * @return {number}
 */
/*const maxProfit = function(prices) {
  let minValOfCurSubArray = prices[0];
  let max =0;
  for (let i = 1; i < prices.length; i++) {
    max = Math.max(max, prices[i] - minValOfCurSubArray);
    minValOfCurSubArray = Math.min(minValOfCurSubArray, prices[i]);
  }
  return max;
};*/

/**
 * 买卖股票获得最大利润（不限制买卖次数）通用解法动态规划
 */
/*const maxProfit = function(prices) {
  let dp = new Array(prices.length);
  for (let i = 0; i < prices.length; i++) {
    dp[i] = new Array(2);
  }
  dp[0][0] = 0;
  dp[0][1] = -prices[0];
  for (let i = 1; i < prices.length; i++) {
    dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i]);
    dp[i][1] = Math.max(dp[i - 1][0] - prices[i], dp[i - 1][1]);
  }
  return Math.max(dp[prices.length - 1][0], dp[prices.length - 1][1]);
};*/

/**
 * 买卖股票获得最大利润（不限制买卖次数）简易解法
 */
/*
const maxProfit = function(prices) {
  let profit = 0;
  for (let i = 1; i < prices.length; i++) {
    profit += Math.max(0, prices[i] - prices[i - 1]);
  }
  return profit;
};*/
/**
 * 买卖股票获得最大利润（不限制买卖次数）有手续费
 */
const maxProfit = function(prices, fee) {
  let dp = new Array(prices.length);
  for (let i = 0; i < prices.length; i++) {
    dp[i] = new Array(2);
  }
  dp[0][0] = 0;
  dp[0][1] = -prices[0];
  for (let i = 1; i < prices.length; i++) {
    dp[i][0] = Math.max(dp[i - 1][1] + prices[i] - fee, dp[i - 1][0]);
    dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] - prices[i]);
  }
  return Math.max(dp[prices.length - 1][0], dp[prices.length - 1][1]);
};
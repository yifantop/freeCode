const longestPalindrome = function (s) {
  const dp = new Array(s.length);
  for (let i = 0; i < s.length; i++) {
    dp[i] = new Array(s.length);
  }
  let max = 1;
  let start = 0;
  let end = 0;
  for (let k = 0; k < s.length; k++) {
    for (let i = 0; i < s.length - k; i++) {
        if (k === 0) {
            dp[i][i + k] = true;
        } else if (k === 1) {
            dp[i][i + k] = s.charAt(i) === s.charAt(i + k);
        } else {
            dp[i][i + k] = dp[i + 1][i + k - 1] && s.charAt(i) === s.charAt(i + k);
        }
        if (dp[i][i + k] && k + 1 > max) {
            max = k + 1;
            start = i;
            end = i + k;
        }
    }
  }
  return s.substring(start, end + 1);
};

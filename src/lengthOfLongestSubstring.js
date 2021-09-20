const lengthOfLongestSubstring = function (s) {
  let left = 0;
  let right = 0;
  let map = new Map();
  let max = 0;
  while (right < s.length) {
    let c = s.charAt(right);
    if (map.has(c)) {
      while (s.charAt(left) !== c) {
        map.delete(s.charAt(left));
        left++;
      }
      left++;
    } else {
      map.set(c, true);
    }
    max = Math.max(max, right - left + 1);
    right++;
  }
  return max;
};

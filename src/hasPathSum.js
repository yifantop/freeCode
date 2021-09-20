// 递归，递归每深入到下一层，targetSum就减掉本层的val
const hasPathSum = function (root, targetSum) {
  if (root === null) {
      return false;
  }
  if (root.left === null && root.right === null) {
    return root.val === targetSum;
  } else {
    let left = false;
    let right = false;
    if (root.left !== null) {
      left = hasPathSum(root.left, targetSum - root.val);
    }
    // 提前返回
    if (left) {
        return true;
    }
    if (root.right !== null) {
      right = hasPathSum(root.right, targetSum - root.val);
    }
    return left || right;
  }
};

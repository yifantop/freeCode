/**
 * 一棵树，每个结点有序号和价值，从某个结点拆成两棵树，要让这两棵树的各自价值之和的差的绝对值最大，找到这个结点
 */

function Node(id, weight, left = null, right = null) {
  this.id = id;
  this.weight = weight;
  this.left = left;
  this.right = right;
}

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let n = undefined;
let count = -2;
let weights = undefined;
let nodes = [];
let index = -1;
let root = undefined;
rl.on("line", (line) => {
  if (count === -2) {
    n = Number(line);
    count++;
  } else if (count === -1) {
    weights = line.split(" ").map((e) => {
      return Number(e);
    });
    for (let i = 0; i < n; i++) {
      nodes.push(new Node(i, weights[i]));
    }
    count++;
  } else {
    let arr = line.split(" ").map((e) => {
      return Number(e);
    });
    if (count === 0) {
      root = arr[0];
    }
    if (index === arr[0]) {
      nodes[arr[0]].right = nodes[arr[1]];
    } else {
      nodes[arr[0]].left = nodes[arr[1]];
      index = arr[0];
    }
    count++;
    if (count === n - 1) {
      resolve();
      rl.close();
    }
  }
});

function resolve() {
  let currentTreeSum = new Array(n);
  const dfs = function (root) {
    if (root.left === null && root.right === null) {
      currentTreeSum[root.id] = root.weight;
      return root.weight;
    }
    let leftSum = 0;
    let rightSum = 0;
    if (root.left !== null) {
      leftSum = dfs(root.left);
    }
    if (root.right !== null) {
      rightSum = dfs(root.right);
    }
    currentTreeSum[root.id] = leftSum + rightSum + root.weight;
    return currentTreeSum[root.id];
  };
  dfs(nodes[root]);
  // 比较
  let max = -Infinity;
  let pos = undefined;
  for (let i = 0; i < n; i++) {
    if (i === root) {
      continue;
    }
    let sonTreeSum = currentTreeSum[i];
    let FatherTreeSum = currentTreeSum[root] - sonTreeSum;
    let val = Math.sqrt(FatherTreeSum - sonTreeSum);
    if (val > max) {
      max = val;
      pos = i;
    }
  }
  console.log(pos);
}
/**
 * 括号匹配，没有用switch，那样不好扩展代码，所以用了map
 * @param s
 * @returns {boolean}
 */
function match(s) {
  const map = new Map();
  map.set("(", ")");
  map.set("[", "]");
  map.set("{", "}");
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    let c = s.charAt(i);
    if (c === "(" || c === "[" || c === "{") {
      stack.push(c);
    } else {
      if (map.get(stack.pop()) !== c) {
        return false;
      }
    }
  }
  return stack.length <= 0;
}

console.log(match("()[]{}"));
console.log(match("({}]"));
console.log(match("[[[]"));

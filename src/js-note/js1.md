## 为什么用 void 0 代替 undefined?
undefined是全局对象的一个**属性**，它定义如下：
* configurable: false
* enumerable: false
* writable: false
* value: undefined

通俗来讲，就是在js中用到的undefined实际都是undefined这个变量，该变量的类型是undefined类型，值是undefined（不用在意在计算机中具体是什么），undefined不像null一样是一个关键字，它可以在函数内或在全局被重新定义：
```javascript
let undefined = 5;
console.log(undefined);  // 输出5

(function test() {
  let undefined = 5;
  console.log(undefined);  // 输出5
})();
```
为了防止undefined这个变量被篡改或重新定义然后赋值，就采用void 0，因为void可以将任何表达式转换成undefined值，避免使用undefined赋值。
 ```javascript
// 不要这样
let a = undefined;
// 改为这样
let a = void 0;
// 或者
let a;
```

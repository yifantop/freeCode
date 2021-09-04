/**
 * 实现Promise.all()
 * @param promisesOfStep
 * @returns {Promise<unknown>}
 */
function myPromiseAll(promisesOfStep) {
  let res = [];
  let fulfilledCount = 0;
  let rejectedCount = 0;
  return new Promise((resolve, reject) => {
    const fulfilledCallback = function (val) {
      fulfilledCount++;
      res.push(val);
      if (fulfilledCount === promisesOfStep.length) {
        resolve(res);
      }
    };
    const rejectedCallback = function (err) {
      if (rejectedCount === 0) {
        rejectedCount++;
        reject(err);
      }
    };
    for (let promise of promisesOfStep) {
      promise
        .then(fulfilledCallback)
        .catch(rejectedCallback);
    }
  });
}

/**
 * 测试
 * 结果显示和Promise.all()一样
 */
function step1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(1);
    }, 2000);
  });
}
function step2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(2);
    }, 3000);
  });
}

myPromiseAll([step1(), step2()]).then((res) => {
  console.log(res);
}).catch((err) => {
  console.log(err);
});
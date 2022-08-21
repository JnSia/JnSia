const { odd, even } = require('./Node-module');
// 읽으면 cashed => 메모리에 모듈을 저장하여 빠른 작업 가능
const { file, dir } = require('./Node-internal-object');

function checkOddEven(number) {
  if (number % 2) {
    return odd;
  } else {
    return even;
  }
}

dir;

module.exports = {
  checkOddEven,
};

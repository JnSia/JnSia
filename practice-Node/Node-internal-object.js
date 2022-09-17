// global: 노드의 전역 객체 (브라우저의 window 같은 역할) => 생략 가능

// console.log()
// console.dir(): 객체 로깅
// console.error(): 에러 로깅
// console.trace(): 호출 스택 로깅
// console.time(), console.timeEnd(): 시간 로깅
// console.table: 테이블로 로깅

// setTimeout()
// setInterval()
// setImmediate()
//      => 모두 비동기

// __filename: 현재 파일 경로
// __dirname: 현재 폴더(디렉토리) 경로

const file = console.log(__filename);
const dir = console.log(__dirname);

exports.file = file;
exports.dir = dir;

// module.exports = {
//   file,
//   dir,
// };

console.log(this); // global
console.log(this === module.exports);

function a() {
  console.log(this === global);
}

a();

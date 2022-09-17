const fs = require('fs').promises;

console.time('1');

fs.readFile('./readme.txt')
  .then((data) => {
    console.log('1번', data.toString());
  })
  .catch((err) => {
    throw err;
  });

fs.readFile('./readme.txt')
  .then((data) => {
    console.log('2번', data.toString());
  })
  .catch((err) => {
    throw err;
  });

fs.readFile('./readme.txt')
  .then((data) => {
    console.log('3번', data.toString());
  })
  .catch((err) => {
    throw err;
  });

fs.readFile('./readme.txt')
  .then((data) => {
    console.log('4번', data.toString());
  })
  .catch((err) => {
    throw err;
  });

console.timeEnd('1');

// 터미널에 node async 입력 시 순서가 매번 달라짐 -> 비동기-논 블로킹 방식!

// 동기와 비동기 => 백그라운드 작업 완료 확인 여부
// 블로킹과 논 블로킹 => 함수가 바로 return 되는지 여부
// 노드에서는 대부분 동기-블로킹 방식과 비동기-논 블로킹 방식을 사용

// 동기-블로킹 => 작업 소요 시간은 길어지지만, 순서를 지정할 수 있음
// 비동기-논 블로킹 => 작업 소요 시간은 짧아지지만, 순서를 지정할 수 없음

console.time('2');

async function main() {
  let data = await fs.readFile('./readme.txt');
  console.log('1번', data.toString());
  data = await fs.readFile('./readme.txt');
  console.log('2번', data.toString());
  data = await fs.readFile('./readme.txt');
  console.log('3번', data.toString());
  data = await fs.readFile('./readme.txt');
  console.log('4번', data.toString());
}

main();

console.timeEnd('2');

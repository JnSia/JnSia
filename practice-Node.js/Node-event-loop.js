// 호출 스택, 백그라운드, 메모리, 태스크 큐

function oneMore() {
  console.log('one more');
}

function run() {
  console.log('run run');
  setTimeout(() => {
    console.log('wow');
  }, 0);
  new Promise((resolve) => {
    resolve('hi'); // Promise는 동기
  }).then(console.log); // then을 만나는 순간, 비동기로 전환
  oneMore();
}

// 백그라운드에서 먼저 끝나는 함수가 태스크 큐로 이동
// Promise.then/catch 또는 process.nextTick이 setTimeout 보다 우선순위
// 백그라운드, 태스크 큐는 C++ 또는 다른 언어로 구성되어 있음

setTimeout(run, 5000);

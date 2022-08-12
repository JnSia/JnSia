function first() {
  second();
  console.log('첫 번째');
}
function second() {
  third();
  console.log('두 번째');
}
function third() {
  console.log('세 번째');
}

first();

// 호출 스택 (함수의 호출, 자료구조의 스택)
//      anonymous는 가상의 전역 컨텍스트
//      함수 호출 순서대로 쌓이고, 역순으로 실행
//      함수 실행이 완료되면 스택에서 빠짐
//      LIFO 구조라서 스택이라고 불림

function run() {
  console.log('3초 후 실행');
}
console.log('시작');
setTimeout(run, 3000);
console.log('끝');

// 위의 경우 호출스택 + 이벤트 루프로 설명 가능

if (true) {
  var x = 3;
}
console.log(x);

// var는 함수 스코프 => 외부에서 접근 가능
// var는 함수 내에서는 외부에서 접근 불가

if (true) {
  const y = 3;
}
// console.log(y);

// const는 블록 스코프 => 외부에서 접근 불가
// const 뒤에 =은 하나만 쓸 수 있음 -> 변경하지 않을 변수를 const로 선언

// 템플릿 문자열, 객체 리터럴

const won = 1000;

const result = `이 과자는 ${won}원입니다.`;

console.log(result);

function a() {}
a();
a``; // tagged template literal

// object literal
//      object method에 :function을 붙이지 않아도 됨
//      { sayNode: sayNode }를 { sayNode }로 축약 가능
//      [변수 + 값] 등으로 동적 속성명을 객체 속성명으로 사용 가능

const newObject = {
  sayJS() {
    console.log('JS');
  },
  sayNode,
  [es + 6]: 'Fantastic',
};

newObject.sayNode();
newObject.sayJS();

console.log(newObject.ES6);

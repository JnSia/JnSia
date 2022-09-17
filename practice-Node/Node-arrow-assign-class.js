function add1(x, y) {
  return x + y;
} // 함수 표현식

const add2 = (x, y) => {
  return x + y;
};

const add3 = (x, y) => x + y; // 화살표 함수

function not1(x) {
  return !x;
} // 함수 표현식

const not2 = (x) => !x; // 화살표 함수

// 객체 return 시, 소괄호 필수
//      const obj = (x, y) => ({ x, y })

// 화살표 함수에서의 this는 부모의 this를 가져오기 때문에
// this를 이용하기 위해서는 함수 표현식을 사용하는 것이 유리
//      this를 쓸 때는 함수표현식만 쓰고, 아니면 화살표 함수만 사용

// --------------------------------------------------

const example = { a: 123, b: { c: 135, d: 146 } };

// const a = example.a;
// const d = example.b.d;

const {
  a,
  b: { d },
} = example;

arr = [1, 2, 3, 4, 5];

// const x = arr[0];
// const y = arr[1];
// const z = arr[2];

const [x, y, z] = arr;

// this를 사용할 때, 구조 분해 할당 X

// --------------------------------------------------

// 클래스: 프로토타입 문법을 깔끔하게 작성할 수 있는 문법

const Human = function () {
  this.type = type || 'human';
};

Human.isHuman = function (human) {
  return human instanceof Human;
};

Human.prototype.breathe = function () {
  alert('h-a-a-a-m');
};

// let Zero = function (type, firstname, lastname) {
//   Human.apply(this, arguments);
//   this.firstname = firstname;
//   this.lastname = lastname;
// };

// Zero.prototype = Object.create(Human.prototype);
// Zero.prototype.constructor = Zero; // 상속하는 부분
// Zero.prototype.sayName = function () {
//   alert(this.firstname + ' ' + this.lastname);
// };

// let oldZero = new Zero('human', 'Zero', 'Cho');
// Human.isHuman(oldZero); // true

class Zero extends Human {
  constructor(type, firstname, lastname) {
    super(type);
    this.firstname = firstname;
    this.lastname = lastname;
  }

  sayName() {
    super.breathe();
    alert(`${this.firstname} ${this.lastname}`);
  }
}

const newZero = new Zero('human', 'Zero', 'Cho');

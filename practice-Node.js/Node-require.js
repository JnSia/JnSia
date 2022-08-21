// require가 제일 위에 올 필요는 없음
// require.cache에 한 번 require한 모듈에 대한 캐쉬 정보가 포함
// require.main은 노드 실행 시 첫 모듈을 가리킴

require('./Node-module'); // 특정 파일을 실행만 할 때
console.log(require);

// 순환참조: 두 개의 모듈이 서로 require하는 상황
//      dep1이 dep2를 require하고, dep2가 dep1을 require 함
//      dep1의 module.exports가 빈 객체가 됨 => 무한 반복 방지

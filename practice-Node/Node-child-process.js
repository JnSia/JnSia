const exec = require('child_process').exec;

var processes = exec('dir');

processes.stdout.on('data', function (data) {
  console.log(data.toString());
});

processes.stderr.on('data', function (data) {
  console.error(data.toString());
});

// 멀티스레딩은 다른 언어가 더 유리 => child_process를 이용

const spawn = require('child_process').spawn;

const process = spawn('python', ['test.py']);

process.stdout.on('data', function (data) {
  console.log(data.toString());
});

process.stderr.on('data', function (data) {
  console.error(data.toString());
});

// assert: 값을 비교하여 프로그램이 제대로 동작하는지 테스트할 때 사용
// dns: 도메인 이름에 대한 IP 주소를 얻어낼 때 사용
// net: HTPP보다 낮은 레벨인 TCP 또는 IPC 통신을 할 때 사용
// string_decoder: 버퍼 데이터를 문자열로 변경할 때 사용
// tls: TLS와 SSL에 관련된 작업을 할 때 사용
// tty: 터미널과 관련된 작업을 할 때 사용
// dgram: UDP와 관련된 작업을 할 때 사용
// v8: V8 엔진에 직접 접근할 때 사용
// vm: 가상 머신에 직접 접근할 때 사용

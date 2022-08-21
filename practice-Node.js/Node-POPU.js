// process.version: 설치된 노드의 버전
// process.arch: 프로세서 아키텍처 정보 => arm, ia32 등의 값일 수도 있음
// process.platform: 운영체제 플랫폼 정보
// process.pid: 현재 프로세스의 아이디
// process.uptime: 프로세스가 시작된 후 흐른 시간(sec)
// process.execPath: Node의 경로
// process.cwd(): 현재 프로세스가 실행되는 위치
// process.cpuUsage(): 현재 CPU 사용량

// process.env: 시스템 환경 변수들이 들어있는 객체
//      비밀키(DB password, thirdparty app key 등)를 보관하는 용도로도 사용
//      일부 환경변수는 노드 실행 시 영향을 미침

const secretId = process.env.SECRET_ID;
const secretCode = process.env.SECRET_CODE;

// NODE_OPTIONS(노드 실행 옵션), UV_THREADPOOL_SIZE(스레드풀 개수)
// max-old-space-size: 노드가 사용할 수 있는 메모리를 지정하는 옵션
//      NODE_OPTION = --max-old-space-size = 8192
//      UV_THREADPOOL_SIZE = 8

// event loop가 nextTick의 callback 함수를 우선으로 처리
//      promise와 경우가 비슷함 => setImmadiate, setTimeout 보다 높은 우선순위

setImmediate(() => {
  console.log('immadiate');
});
process.nextTick(() => {
  console.log('nextTick');
});
setTimeout(() => {
  console.log('timeout');
}, 0);
Promise.resolve().then(() => console.log('promise'));

// process.exit(): process 종료
//      process.exit(1) => 서버에 오류 발생 시 입력

// os: 운영체제의 정보를 담고 있음

const os = require('os'); // Node 내장 모듈 => 경로 X

console.log(os.cpus()); // 컴퓨터의 코어 정보 표시

// os.arch(): process.arch와 동일
// os.platform(): process.platform과 동일
// os.type(): 운영체제의 종류를 표시
// os.uptime(): 운영체제 부팅 이후 흐른 시간(sec)을 표시
//      process.uptime() => 노드 실행시간
// os.hostname(): 컴퓨터의 이름 표시
// os.release(): 운영체제의 버전 표시
// os.homedir(): 홈 디렉토리 경로 표시
// os.tmpdir(): 임시 파일 저장 경로 표시
// os.freemem(): 사용 가능한 메모리(RAM) 표시
// os.totalmem(): 전체 메모리 용량 표시

// Node 홈페이지 APIdocs에서 추가 정보 확인

const path = require('path'); // 경로 문자열 처리에 이용

console.log(path.join(__dirname, '..', '/Node-test.js'));
// 여러 인자를 넣으면 하나의 경로로 묶으며, '/'를 상대경로로 처리
console.log(path.resolve(__dirname, '..', '/Node-test.js'));
// path.join과 유사하지만, resolve는 '/'를 절대경로로 처리

// path: 폴더와 파일의 경로를 쉽게 조작하도록 도와주는 모듈
//      경로 구분자 => Windows: '\' / POSIX(Linux + Mac): '/'

// path.sep: 경로 구분자 표시
// path.delimiter: 환경 변수 구분자 표시
//      process.env.PATH => 여러 개의 경로가 환경 변수의 구분자로 표시
//      Windows => ';' / POSIX => ':'
// path.dirname(path): 파일이 위치한 파일 경로 표시
// path.extname(path): 파일의 확장자 표시
// path.basename(path, 확장자): 파일 이름(확장자 포함) 표시
//      확장자만 표시하고 싶다면 두 번째 인자로 파일 확장자를 삽입
// path.parse(path): 파일 경로를 root, dir, base, ext, name으로 분리
// path.format(obj): path.parse()를 수행한 객체를 파일 경로로 합침
// path.normalize(path): '/' 또는 '\'의 입력 실수로 인한 오류를 정상으로 반환
// path.isAbsolute(path): 파일 경로가 절대경로인지 상대경로인지 true 또는 false로 표시
// path.relative(기준경로, 비교경로): 기준경로에서 비교경로로 가는 방법을 표시

// searchParams: WHATWG 방식에서 query string 부분 처리를 도와주는 객체
//      .getAll(key): 키에 해당하는 모든 값을 가져옴
//          category 키에는 Nodejs와 JavaScript의 값이 들어 있음
//      .get(key): 키에 해당하는 첫 번째 값만 가져옴
//      .has(key): 해당 키가 있는지 없는지 검사
//      .keys(): searchParams의 모든 키를 반복기 객체로 가져옴
//      .values(): searchParams의 모든 값을 반복기 객체로 가져옴
//      .append(key, value): 해당 키를 추가하며, 같은 키의 값이 있다면 유지하고 하나 더 추가
//      .set(key, value): append와 비슷하지만 같은 키의 값들을 모두 지우고 새로 추가
//      .delete(key): 해당 키를 제거
//      .toString(): 조작한 searchParams 객체를 다시 문자열로 만듦

// 기존 노드 방식에서는 url querystring을 querystring 모듈로 처리
//      querystring.parse(query): url의 query 부분을 JS 객체로 분해
//      querystring.stringify(obj): 분해된 query 객체를 문자열로 다시 조립

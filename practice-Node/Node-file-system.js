// fs: 파일 시스템에 접근하는 모듈
//      파일/폴더 생성, 삭제, 쓰기 가능 => 노드가 권한을 보유

const fs = require('fs').promises;

fs.readFile('./readme.txt')
  .then((data) => {
    console.log(data);
    console.log(data.toString());
  })
  .catch((err) => {
    throw err;
  });

fs.writeFile('./writeme.txt', '글이 입력됩니다.')
  .then(() => {
    return fs.readFile('./practice-Node.js/writeme.txt');
  })
  .then((data) => {
    console.log(data);
    console.log(data.toString());
  })
  .catch((err) => {
    throw err;
  });

// fs.access(경로, 옵션, 콜백): 폴더나 파일에 접근할 수 있는지 파악
//      F_OK: 파일 존재 여부 / W_OK: 읽기 권한 여부 / W_OK: 쓰기 권한 여부
//      파일 또는 폴더가 존재하지 않거나 권한이 없다면, ENOENT 에러 코드 표시
// fs.mkdir(경로, 콜백): 폴더를 만드는 method
//      이미 폴더가 있다면 에러가 발생 => 먼저 access() method를 호출하여 확인
// fs.open(경로, 옵션, 콜백): 파일의 아이디(fd 변수)를 가져오는 method
//      파일이 없다면 파일을 생성한 뒤, 그 아이디를 가져옴
//      가져온 아이디를 사용하여 fs.read() 또는 fs.write 사용 가능
//      옵션에 해당하는 인자로 w(write), r(read), a(add)가 존재
// fs.rename(기존 경로, 새 경로, 콜백): 파일의 이름을 바꾸는 method
//      같은 폴더를 지정할 필요는 없으며, 잘라내기 같은 기능을 할 수 있음
// fs.readdir(경로, 콜백): 폴더 내의 내용물을 확인
//      배열 내에 내부 파일과 폴더명이 표시
// fs.unlink(경로, 콜백): 파일 삭제
//      파일이 없으면 에러가 발생 => 먼저 파일이 있는지 확인
// fs.rmdir(경로, 콜백): 폴더 삭제
//      폴더 내에 파일이 있으면 에러가 발생 => 먼저 내부 파일을 모두 지우고 호출
// fs.copyFile(경로, 경로): 파일 복사
// fs.watch(경로, 콜백): 파일 내에 변경사항 발생 시 이벤트 호출

// 추가 정보는 nodejs docs 공식문서 참고!

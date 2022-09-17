const http = require('http');
const fs = require('fs').promises;

const server = http
  .createServer(async (req, res) => {
    try {
      res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
      const data = await fs.readFile('./Node-server.html');
      res.end(data);
    } catch (error) {
      console.error(error);
      res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
      res.end(error.message);
    }
  })
  .listen(8080);
server.on('listening', () => {
  console.log('8080번 포트에서 서버 대기 중입니다.');
});
server.on('error', (error) => {
  console.error(error);
});

// 하나의 주소에 서로 다른 DB를 연결 가능
// 공개를 하기 위한 웹 서버 설정 => 서버 공개
//      => 대부분 클라우드 서버를 이용하여 배포

// 서버에 요청을 보낼 때는 주소를 통해 요청의 내용을 표현
// REST API(Representational State Transfer)
//      => 서버의 자원을 정의하고 자원에 대한 주소를 지정하는 방법
//      /user -> 사용자 정보에 관한 정보를 요청
//      /post -> 게시글에 관련된 자원을 요청하는 것

// HTTP 요청 method
//      GET: 서버 자원을 가져오라고 할 때 사용
//      POST: 서버 자원을 새로 등록하고자 할 때 사용
//      PUT: 서버의 자원을 요청에 들어있는 자원으로 치환하고자 할 때 사용
//      PATCH: 서버 자원의 일부만 수정하고자 할 때 사용
//      DELETE: 서버의 자원을 삭제하고자 할 때 사용

// HTTP 프로토콜을 통해 클라이언트가 누구든 서버와 소통 가능
//      => 서버와 클라이언트의 분리

// RESTful: REST API를 사용한 주소 체계를 이용하는 서버

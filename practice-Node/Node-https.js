// https: 웹 서버에 SSL 암호화를 추가하는 모듈
//      데이터를 암호화하여 중간에 요청을 가로채더라도 내용을 확인할 수 없음
//      개인정보가 있는 사이트는 https 적용이 필수

const https = require('https');
const fs = require('fs');

https
  .createServer(
    {
      cert: fs.readFileSync('도메인 인증서 경로'),
      key: fs.readFileSync('도메인 비밀키 경로'),
      ca: [
        fs.readFileSync('상위 인증서 경로'),
        fs.readFileSync('상위 인증서 경로'),
      ],
    },
    (req, res) => {
      res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
      res.write('<h1>Hello Node!</h1>');
      res.end('<p>Hello Server!</p>');
    }
  )
  .listen(443, () => {
    console.log('443번 포트에서 서버 대기 중입니다!');
  });

// 무료 SSL 인증서: Let's Encrypt

// http2: SSL 암호화와 더불어 최신 HTTP 프로토콜인 http/2를 사용하는 모델
//      요청 및 응답 방식이 기존 http/1.1 보다 개선 => 웹 속도 개선
//          https 모듈 -> http2 모듈
//          createServer() -> createSecureServer()

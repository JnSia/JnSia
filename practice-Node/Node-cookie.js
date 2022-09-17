// 누가 요청을 보냈는지 모름 (ip 주소와 브라우저 정보만 수집)
//      => 로그인 구현 -> 쿠키와 세션이 필요

// 쿠키: 키 = 값의 쌍
//      => 매 요청마다 서버에 동봉해서 보냄 -> 쿠키를 통해 누구인지 파악

// writeHead: 요청 헤더에 입력하는 method
// Set-Cookie: 브라우저에게 쿠리를 설정하라고 명령
//      => req.headers .cookie

const http = require('http');

http
  .createServer((req, res) => {
    console.log(req.url, req.headers.cookie);
    res.writeHead(200, { 'Set-Cookie': 'mycookie=test' });
    res.end('Hello, cookie');
  })
  .listen(8003, () => {
    console.log('8003번 포트에서 서버 대기 중입니다!');
  });

// HTTP 요청과 응답은 헤더와 본문을 가짐
//      헤더: 요청 또는 응답에 대한 정보를 가짐
//      본문: 주고받는 실제 데이터
//      쿠키: 부가적인 정보 => 헤더에 저장

// 쿠키명 = 쿠키값: 기본적인 쿠키의 값
// Expires = 날짜: 만료기한
//      기한이 지나면 쿠키가 제거 => 기본값은 클라이언트가 종료될 때
// Max-age = 초: Expires와 비슷하지만 초를 입력할 수 있음
//      해당 초가 지나면 쿠키가 제거 (Expires 보다 우선)
// Domain = 도메인명: 쿠키가 전송될 도메인을 특정할 수 있음
//      기본값은 현재 도메임
// Path = URL: 쿠키가 전송될 URL을 특정할 수 있음
//      기본값은 '/' => 모든 URL에서 쿠키를 전송할 수 있음
// Secure: HTTPS일 경우에만 쿠키가 전송
// HttpOnly: 설정 시 자바스크립트에서 쿠키에 접근할 수 없음
//      => 쿠키 조작을 방지하기 위해 설정하는 것이 좋음

// 중요한 정보는 서버에서 관리하고, 클라이언트에는 세션 키만 제공
// 서버에 세션 객체(session) 생성 후, uniquent(키)를 만들어 속성명으로 사용
// 속성 값에 정보 저장하고 uniqueint를 클라이언트에 보냄

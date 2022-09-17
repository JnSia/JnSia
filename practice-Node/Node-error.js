// 예외 처리
//      예외(Exception): 처리하지 못한 에러
//          => 노드 스레드를 멈춤 -> 프로세스가 멈춤

const { hasUncaughtExceptionCaptureCallback } = require('process');

setInterval(() => {
  try {
    throw new Error('서버를 고장내주마!');
  } catch (error) {
    console.log(error);
  }
}, 0);

// 콜백 함수 사용 시, error가 발생해도 프로세스가 진행

const fs = require('fs').promises;

setInterval(() => {
  fs.unlink('./readme.txt');
}, 0);

// uncaughtException: 모든 exception을 기록

process.on('uncaughtException', (err) => {
  console.error('예기치 못한 에러', err);
});

// netstat -ano | findstr 포트번호
// taskkill /pid 프로세스아이디 /f
//      => 프로세스 종료

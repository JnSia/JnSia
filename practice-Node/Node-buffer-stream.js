// 버퍼: 일정한 크기로 모아두는 데이터
//      일정한 크기가 되면 한 번에 처리
//      버퍼링: 버퍼에 데이터가 찰 때까지 모으는 작업

// 스트림: 데이터의 흐름
//      일정한 크기로 나눠서 여러 번에 걸쳐서 처리
//      버퍼의 크기를 작게 만들어서 주기적으로 데이터를 전달
//      스트리밍: 일정한 크기의 데이터를 지속적으로 전달하는 작업

const buffer = Buffer.from('저를 버퍼로 바꿔보세요.');

console.log(buffer);
console.log(buffer.length);
console.log(buffer.toString());

const array = [
  Buffer.from('띄엄 '),
  Buffer.from('띄엄 '),
  Buffer.from('띄어쓰기'),
];

console.log(Buffer.concat(array).toString());

console.log(Buffer.alloc(5));

// -----

const fs = require('fs');
const readStream = fs.createReadStream('./readus.txt', { highWaterMark: 16 });

const data = [];
readStream.on('data', (chunk) => {
  data.push(chunk), console.log('data: ', chunk, chunk.length);
});
readStream.on('end', () => {
  console.log('end: ', Buffer.concat(data).toString());
});
readStream.on('errer: ', (err) => {
  console.log('error: ', err);
});

// -----

const writeStream = fs.createWriteStream('./writeus.txt');
writeStream.on('finish', () => {
  console.log('파일 쓰기 완료');
});

writeStream.write('이 글을 씁니다. \n');
writeStream.write('한 번 더 씁니다.');
writeStream.end();

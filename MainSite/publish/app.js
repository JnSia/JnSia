// const express = require('express');
// const path = require('path');
// const http = require('http');
// const fs = require('fs').promises;

// const app = express();

// app.set('port', process.env.PORT || 5460);

// app.get('/writeReview', (req, res) => {
//   res.sendFile('./writeReview.html');
// });

// app.get('/review', (req, res) => {
//   res.sendFile('./review.html');
// });

// app.get('/review2', (req, res) => {
//   res.sendFile('./review2.html');
// });

// app.use((req, res, next) => {
//   res.sendFile('./error.html');
// });

// app.use(
//   '/node_modules',
//   express.static(path.join(__dirname + '/node_modules'))
// );

const http = require('http');
const fs = require('fs').promises;

const users = {}; // 데이터 저장용

http
  .createServer(async (req, res) => {
    if (req.url === '/images') {
      fs.readFile('./images/socute.jpg'),
        (err, data) => {
          res.writeHead(200);
          res.write(data);
          res.end();
        };
    }

    try {
      if (req.method === 'GET') {
        if (req.url === '/') {
          const data = await fs.readFile('./writeReview.html');
          res.writeHead(
            200,
            // 200 => 요청이 성공적으로 이루어짐 (HTTP 응답)
            { 'Content-Type': 'text/html; charset=utf-8' }
          );
          return res.end(data);
        } else if (req.url === '/review2') {
          const data = await fs.readFile('./review2.html');
          res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
          return res.end(data);
        } else if (req.url === '/review') {
          res.writeHead(
            201,
            // 201 => 생성됨
            {
              'Content-Type': 'application/json; charset=utf-8',
            }
          );
          return res.end(JSON.stringify(users));
        }
        // /도 /about도 /users도 아니면
        try {
          const data = await fs.readFile(`.${req.url}`);
          return res.end(data);
        } catch (err) {
          // 주소에 해당하는 라우트를 못 찾았다는 404 Not Found error 발생
          fs.readFile('./error.html');
        }
      } else if (req.method === 'POST') {
        if (req.url === '/user') {
          let body = '';
          // 요청의 body를 stream 형식으로 받음
          req.on('data', (data) => {
            body += data;
          });
          // 요청의 body를 다 받은 후 실행됨
          return req.on('end', () => {
            console.log('POST 본문(Body):', body);
            const { name } = JSON.parse(body);
            const id = Date.now();
            users[id] = name;
            res.writeHead(201, { 'Content-Type': 'text/plain; charset=utf-8' });
            res.end('ok');
          });
        }
      } else if (req.method === 'PUT') {
        if (req.url.startsWith('/user/')) {
          const key = req.url.split('/')[2];
          let body = '';
          req.on('data', (data) => {
            body += data;
          });
          return req.on('end', () => {
            console.log('PUT 본문(Body):', body);
            users[key] = JSON.parse(body).name;
            res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
            return res.end('ok');
          });
        }
      } else if (req.method === 'DELETE') {
        if (req.url.startsWith('/user/')) {
          const key = req.url.split('/')[2];
          delete users[key];
          res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
          return res.end('ok');
        }
      }
      const data = await fs.readFile('./error.html');
      res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
      return res.end(data);
    } catch (err) {
      console.error(err);
      res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
      res.end(err.message);
    }
  })
  .listen(5460, () => {
    console.log('5460번 포트에서 서버 대기 중입니다');
  });

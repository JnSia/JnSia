const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const path = require('path');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const multer = require('multer');

const indexRouter = require('./routes');
const userRouter = require('./routes/user');

const app = express();

app.set('port', process.env.PORT || 3000);
// SET PORT=80

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
// Pug 템플릿 엔진 설정

// middleware의 특성
//      req, res, next를 매개변수로 가지는 함수

app.use(morgan('dev')); // 클라이언트의 요청과 그에 대한 응답을 표시
// app.use(morgan('combined')); // 배포 시 사용

app.use(
  session({
    resave: false, // 요청이 왔을 때 세션에 수정사항이 생기지 않아도 다시 저장할지 여부
    saveUninitialized: false, // 세션에 저장할 내역이 없더라도 세션을 저장할지
    secret: process.env.COOKIE_SECRET, // 쿠키 암호화
    cookie: {
      httpOnly: true,
    }, // 세션 쿠키 옵션
  })
);
// 로그인 유무에 대한 next() 수행 여부가 결정

app.use('/', (req, res, next) => {
  if (req.session.id) {
    express.static(__dirname, 'public')(req, res, next);
  } else {
    next();
  }
});
// app.use('요청 경로', express.static('실제 경로'));
// 요청한 파일이 존재할 경우, 클라이언트에 응답하고 next()를 수행하지 않음

app.use(cookieParser(process.env.COOKIE_SECRET));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// true => qs / false => query string

// 모든 middleware는 next()가 내장되어 있음

app.use('/', indexRouter);
app.use('/user', userRouter);

app.use(
  (req, res, next) => {
    console.log('1 요청에 실행하고 싶어요.');
    next();
  },
  (req, res, next) => {
    console.log('2 요청에 실행하고 싶어요.');
    next();
  },
  (req, res, next) => {
    console.log('3 요청에 실행하고 싶어요.');
    next();
  },
  // (req, res, next) => {
  //   throw new Error('에러에러에러에러에러');
  // },
  (req, res, next) => {
    try {
      console.log(errororre);
    } catch (error) {
      next(error);
    }
  }
);
// middleware는 next()를 넣어줘야 함

app.use((req, res, next) => {
  // req.session.data = 'jnsiaPassword'; // 영구적으로 data가 남아있음
  req.data = 'jnsiaPassword'; // 아래 middleware의 req와 공유
});

app.get(
  '/',
  (req, res) => {
    // req.session.data;
    req.session.data;
    res.sendFile(path.join(__dirname, 'index.html'));
    if (true) {
      next('route'); // 다음 라우터를 실행
    } else {
      next();
    }
  },
  (req, res) => {
    console.log('실행이 될까요?'); // true일 경우 실행되지 않음
  }
);

app.get('/', (req, res) => {
  // req.cookies;
  // req.signedCookies;
  // res.cookie('name', encodeURIComponent(name), {
  //   expires: new Date(),
  //   httpOnly: true,
  //   path: '/',
  // });
  // res.clearCookie('name', encodeURIComponent(name), {
  //   httpOnly: true,
  //   path: '/',
  // });

  // req.body.name;

  // req.session.id = 'hello'; // 요청을 보낸 사람의 id를 hello로 지정

  res.sendFile(path.join(__dirname, './index.html'));

  // res.writeHead(200, { 'Content-Type': 'application/json' });
  // res.end(JSON.stringify({hello:'jnsia'}));

  res.json({ hello: 'jnsia' });

  // res.writeHead(200, { 'Content-Type': 'text/plain' });
  // res.send('send는 한 번만 쓰세요!');

  res.status(200).send('send와 json은 한 번만 쓰세요!');

  console.log('이 문장은 실행이 됩니다.');
});

app.post('/', (req, res) => {
  res.send('hello express');
});

const upload = multer({
  storage: multer.diskStorage({
    destination(req, res, done) {
      done(null, 'uploads/');
    },
    filename(req, file, done) {
      const ext = path.extname(file.originalname);
      done(null, path.basename(file.originalname, ext) + Date.now() + ext);
    },
  }),
  limits: { fileSize: 5 * 1024 * 1024 },
});

app.get('/upload', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

get.post(
  '/upload',
  // upload.single('image'),
  // 하나의 파일을 업로드할 경우

  upload.array('image'),
  // 여러 파일을 동시에 업로드할 경우

  // upload.fields({name: 'image1'}, {name: 'image2'}, {name: 'image3'}),
  // 여러 파일을 각각 업로드할 경우

  (req, res) => {
    console.log(req.file);
    res.send('ok');
  }
);

app.get('/category/Node', (req, res) => {
  res.send(`hello Node`);
});

app.get('/category/:name', (req, res) => {
  res.send(`hello ${req.params.name}`);
});
// 다른 카테고리의 아래에 배치해야 함

app.get('*', (req, res) => {
  res.send(`hello everyone`);
});
// 범위가 넓은 라우터는 아래에 배치

app.get('/about', (req, res) => {
  res.send('hello express');
});

app.use((req, res, next) => {
  res.status(200).send('404지롱~');
});
// 모든 라우터에 요청이 없는 경우

app.use((err, req, res, next) => {
  res.status(200).send('에러당~ 히히!!');
});

app.listen(app.get('port'), () => {
  console.log('익스프레스 서버 실행');
});

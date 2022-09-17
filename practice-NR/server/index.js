const express = require('express');
const mongoose = require('mongoose');
const { User } = require('./models/User');
const cookieParser = require('cookie-parser');
const { auth } = require('./middleware/auth');

const config = require('./config/dev');
const app = express();
const port = 5000;

mongoose
  .connect(config.mongoURI)
  .then(() => console.log('MongoDB Connected...'))
  .catch((err) => console.log(err));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

// application/x-www.form-urlencoded
app.use(express.urlencoded({ extended: true }));

// application/json
app.use(express.json());

app.use(cookieParser());

app.get('/', (req, res) => res.send("Hello, world! I'm Junsu."));

app.post('api/users/resister', (req, res) => {
  // 회원가입 시 필요한 정보를 client에서 DB로 전송
  const user = new User(req.body);

  user.save((err, userInfo) => {
    if (err) return res.json({ success: false, err });
    return res.status(200).json({
      success: true,
    });
  });
});

app.post('api/users/login', (req, res) => {
  // 요청된 이메일이 DB에 있는지 확인
  User.findOne({ email: req.body.email }, (err, user) => {
    if (!user) {
      return res.json({
        loginSuccess: false,
        message: '제공된 이메일에 해당하는 유저가 없습니다.',
      });
    }

    // 이메일에 해당하는 비밀번호가 맞는지 확인
    user.comparePassword(req.body.password, (err, isMatch) => {
      if (!isMatch)
        return res.json({
          loginSuccess: false,
          message: '비밀번호가 틀렸습니다.',
        });
    });

    // 비밀번호까지 맞다면 토큰 생성 -> npm install jsonwebtoken --save
    user.generateToken((err, user) => {
      if (err) return res.status(400).send(err);

      // 쿠키에 token을 저장 (로컬 스토리지도 활용 가능)
      res
        .cookie('x_auth', user.token)
        .status(200)
        .json({ loginSuccess: true, userId: user._id });
    });
  });
});

app.get('/req/users/auth', auth, (req, res) => {
  // 미들웨어: 엔드포인트로 가기 전 중간 지점 => auto를 통과하면 유저 인증 완료
  res.status(200).json({
    _id: req.user._id,
    isAdmin: req.user.role === 0 ? false : true,
    isAuth: true,
    email: req.user.email,
    name: req.user.name,
    lastname: req.user.lastname,
    role: req.user.role,
    image: req.user.image,
  });
});

app.get('/api/users/logout', auth, (req, res) => {
  User.findOneAndUpdate({ _id: req.user._id }, { token: '' }, (err, user) => {
    if (err) return res.json({ success: false, err });
    return res.status(200).send({
      success: true,
    });
  });
});

app.get('/api/hello', (req, res) => {
  res.send('안녕하세요~');
});

// model은 Schema를 감싸주는 역할
// Schema는 판매자, 제목, 설명 등 상품에 대한 속성값을 설정한?

// Client (browser) <-(body)-> server ()
// JSON, buffer, string, URL encoded data => Body data
// Body-parser Dependency: Body daya를 parse하여 req.body로 출력

// NODE MON: 소스 변경 시 서버를 자동으로 재시작

// Auth:
// 로그인 된 유저만 사용 <-> 모두가 사용 <-> 관리자만 이용
// cookie 내의 token과 DB 내의 token가 같은지 계속 확인하며 권한을 체크

// 1. cookie에 저장된 token을 server로 가져와서 복호화
// 2. 복호화 시 발생한 User ID를 이용하여 DB에서 User를 찾은 후 token 확인
// 3. 쿠기가 일치하면 해당하는 유저의 정보들을

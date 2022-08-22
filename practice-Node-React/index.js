const express = require('express');
const mongoose = require('mongoose');
const { User } = require('./models/User');

const app = express();
const port = 5000;

const config = require('./config/key');

// application/x-www.form-urlencoded
app.use(express.urlencoded({ extended: true }));

// application/json
app.use(express.json());

app.get('/', (req, res) => res.send("Hello, world! I'm Junsu."));

app.post('/resister', (req, res) => {
  // 회원가입 시 필요한 정보를 client에서 DB로 전송
  const user = new User(req.body);

  user.save((err, userInfo) => {
    if (err) return res.json({ success: false, err });
    return res.status(200).json({
      success: true,
    });
  });
});

mongoose
  .connect(config.mongoURI)
  .then(() => console.log('MongoDB Connected...'))
  .catch((err) => console.log(err));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

// model은 Schema를 감싸주는 역할
// Schema는 판매자, 제목, 설명 등 상품에 대한 속성값을 설정한?

// Client (browser) <-(body)-> server ()
// JSON, buffer, string, URL encoded data => Body data
// Body-parser Dependency: Body daya를 parse하여 req.body로 출력

// NODE MON: 소스 변경 시 서버를 자동으로 재시작

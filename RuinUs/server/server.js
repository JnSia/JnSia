const express = require('express');
const path = require('path');
// const indexRouter = require('./routes');
// const userRouter = require('./routes');

const { sequelize, User } = require('./models');

const app = express();
app.set('port', process.env.PORT || 8080);

// app.use('/', indexRouter);
// app.use('/user', userRouter);

sequelize
  .sync({ force: false })
  .then(() => {
    console.log('Database connected...');
  })
  .catch((err) => {
    console.error(err);
  });

// (async () => {
//   const users = await User.findAll({ where: { name: 'sia' } });
//   console.log(users);
// })();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, '../build')));

app.post('/login', (req, res) => {
  console.log(req.body);

  (async () => {
    const checkUser = await User.findAll({
      where: { name: req.body.userID, password: req.body.userPW },
    });

    console.log(checkUser);

    if (checkUser.length !== 0) {
      console.log('성공');
    } else {
      console.log('실패');
    }
  })();
});

app.use((req, res, next) => {
  res.status(200).send('404지롱~');
});

app.listen(app.get('port'), () => {
  console.log('Server On...');
});

const express = require('express');
const path = require('path');

const { sequelize } = require('./models');

const app = express();
app.set('port', process.env.PORT || 5460);

sequelize
  .sync({ force: false })
  .then(() => {
    console.log('Database connected...');
  })
  .catch((err) => {
    console.error(err);
  });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, '../build')));

app.use((req, res, next) => {
  res.status(200).send('404지롱~');
});

app.listen(app.get('port'), () => {
  console.log('Server on...');
});

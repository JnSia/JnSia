const express = require('express');
const Sequelize = require('sequelize');

// const User = require('./User');
// const Comment = require('./Comment');

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Hello, Express');
});

const env = process.env.NODE_ENV || 'development';
const config = require('../config/config')[env];
const db = {};

const sequelize = new Sequelize(config.database, config.username, config.password, config);

db.sequelize = sequelize;

// user, comment DB relation
// db.User = User;
// db.Comment = Comment;

// User.init(sequelize);
// Comment.init(sequelize);

// User.associate(db);
// Comment.associate(db);

module.exports = db;

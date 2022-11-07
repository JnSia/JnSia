const Sequelize = require('sequelize');

module.exports = class Content extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        // id는 자동 생성
        name: {
          type: Sequelize.STRING(20),
          allowNull: false, // NOT NULL
          unique: true,
        },
        age: {
          type: Sequelize.INTEGER.UNSIGNED,
          allowNull: false,
        },
        married: {
          type: Sequelize.BOOLEAN, // TINYINT
          allowNull: false,
        },
        comment: {
          type: Sequelize.TEXT,
          allowNull: true,
        },
        createdAt: {
          type: Sequelize.DATE, // DATETIME
          allowNull: false,
          defaultValue: sequelize.NOW,
        },
      },
      {
        sequelize,
        timetamps: true,
        underscored: false,
        paranoid: true,
        modelName: 'Content',
        tableName: 'Contents',
        charset: 'utf8',
        collate: 'utf8_general_ci',
      }
    );
  }
};

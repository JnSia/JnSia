const DataTypes = require('sequelize');
const { Model } = DataTypes;

module.exports = class Content extends Model {
  static init(sequelize) {
    return super.init(
      {
        // id는 자동 생성
        title: {
          type: DataTypes.STRING(50),
          allowNull: false, // NOT NULL
          unique: true,
        },
        contents: {
          type: DataTypes.TEXT,
          allowNull: false,
        },
        cause: {
          type: DataTypes.TEXT,
          allowNull: false,
        },
        sort: {
          type: DataTypes.TEXT,
          allowNull: false,
        },
        reserve: {
          type: DataTypes.TEXT,
          allowNull: false,
        },
        createdAt: {
          type: DataTypes.DATE, // DATETIME
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
  static associate(db) {
    db.Content.belongsTo(db.User, { foreignKey: 'users', targetKey: 'id' });
  }
};

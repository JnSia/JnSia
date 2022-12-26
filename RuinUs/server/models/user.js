const DataTypes = require('sequelize');
const { Model } = DataTypes;

module.exports = class User extends Model {
  static init(sequelize) {
    return super.init(
      {
        name: {
          type: DataTypes.STRING(20),
          allowNull: false, // NOT NULL
          unique: true,
        },
        password: {
          type: DataTypes.STRING(30),
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
        modelName: 'User',
        tableName: 'users',
        charset: 'utf8',
        collate: 'utf8_general_ci',
      }
    );
  }
  static associate(db) {
    db.User.hasMany(db.Content, { foreignKey: 'users', sourceKey: 'id' });
  }
};

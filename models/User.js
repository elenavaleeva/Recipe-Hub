const { Model, DataTypes } = require('sequelize');
const Sequelize = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');
const { Hooks } = require('sequelize/types/hooks');


class User extends Model {
  checkPassword(loginPw) {
    return bcrypt.compareSync(loginPw, this.password);
  }
  checkEmail(loginEmail) {
    return this.email === loginEmail;
  }
  checkUsername(loginUsername) {
    return this.username === loginUsername;
  }
  checkId(loginId) {
    return this.id === loginId;
  }
}


// Define the User model
const User = sequelize.define('User', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true
    }
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false
  }
},

  // Hash the password before saving
  {
    Hooks: {
      beforeCreate: async (newUser) => {
        newUser.password = await bcrypt.hash(newUser.password, 10);
      },
      beforeUpdate: async (updatedUser) => {
        updatedUser.password = await bcrypt.hash(updatedUser.password, 10);
        return updatedUser;
      },
    },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'user'
  }
);








module.exports = { User };


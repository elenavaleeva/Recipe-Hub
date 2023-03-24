const express = require('express');
const Sequelize = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');
const { Model, DataTypes } = require('sequelize');

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
const UserModel = sequelize.define('user', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true
    }
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  }
},
{
  hooks: {
    beforeCreate: async (newUser) => {
      newUser.password = await bcrypt.hash(newUser.password, 10);
    },
    beforeUpdate: async (updatedUser) => {
      updatedUser.password = await bcrypt.hash(updatedUser.password, 10);
      return updatedUser;
    },
  },
  timestamps: false,
  freezeTableName: true,
  underscored: true,
  modelName: 'user',
  sequelize
});

module.exports = { User: UserModel };

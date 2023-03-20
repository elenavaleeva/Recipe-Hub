const express = require('express');
const Sequelize = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

// Define the Recipe model
const Recipe = sequelize.define('recipe', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  ingredients: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  directions: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  image: {
    type: Sequelize.STRING,
    allowNull: true
  }
});

// Define the User model
const User = sequelize.define('user', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  username: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

// Define the relationship between Recipe and User
Recipe.belongsTo(User);
User.hasMany(Recipe);

module.exports = {
  Recipe,
  User
};

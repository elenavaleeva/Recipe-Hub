
const { Model, DataType } = require('sequelize');
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




module.exports = Recipe;

const Sequelize = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');
const Recipe = require('./recipe');
const User = require('./user');

// // Define the User model
// const User = sequelize.define('User', {
//   id: {
//     type: Sequelize.INTEGER,
//     primaryKey: true,
//     autoIncrement: true
//   },
//   name: {
//     type: Sequelize.STRING,
//     allowNull: false
//   },
//   email: {
//     type: Sequelize.STRING,
//     allowNull: false,
//     unique: true,
//     validate: {
//       isEmail: true
//     }
//   },
//   password: {
//     type: Sequelize.STRING,
//     allowNull: false
//   }
// });

// Hash the password before saving
User.beforeCreate(async (user) => {
  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(user.password, salt);
});


// const sequelize = new Sequelize('database', 'username', 'password', {
//   host: 'localhost',
//   dialect: 'postgres'
// });

// const User = new UserModel(sequelize, Sequelize);
// const Recipe = RecipeModel(sequelize, Sequelize);

User.hasMany(Recipe, {as: 'recipe'});
Recipe.belongsTo(User);

module.exports = {Sequelize,User,Recipe};
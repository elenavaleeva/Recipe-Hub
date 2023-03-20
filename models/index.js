const User = require("./User");
const Recipe = require("./Recipe");



User.hasMany(Recipe, {
  foreignKey: "recipe_id",
});

// Recipe.hasMany(User, {
//   foreignKey: "user_id",
// });

Recipe.belongsTo(User, {
  foreignKey: "user_id",
});

// User.belongsTo(Recipe, {
//   foreignKey: "recipe_id",
// });

module.exports = {Recipe, User };
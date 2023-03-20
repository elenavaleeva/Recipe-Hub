const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const { User, Recipe } = require('./models');
const userRoutes = require('./routes/userRoutes');
const recipeRoutes = require('./routes/recipeRoutes');

const app = express();
const port = process.env.PORT || 3001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.use('/users', userRoutes);
app.use('/recipes', recipeRoutes);

// Handle invalid routes
app.use((req, res, next) => {
  const error = new Error('Invalid route');
  error.status = 404;
  next(error);
});

// Handle errors
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.json({
    error: {
      message: err.message
    }
  });
});

// Sync the database and start the server
User.sync().then(() => {
  Recipe.sync().then(() => {
    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  });
});

module.exports = { app };
module.exports.User = { User };
module.exports.Recipe = { Recipe };

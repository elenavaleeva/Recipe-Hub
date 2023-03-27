const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const bcrypt = require('bcrypt');
const routes = require('./controllers');
const helpers = require('./utils/helpers');
// const { Sequelize } = require('sequelize');
const sequelize = require('./config/connection');
// console.log(config.sequelize);
const SequelizeStoreConstructor = require('connect-session-sequelize')(session.Store);


const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(express.static(path.join(__dirname, 'public')));

const hbs = exphbs.create({ helpers });

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.use(routes);

// sequelize.sync({ force: false }).then(() => {
//   app.listen(PORT, () => console.log('Now listening'));
// });


//Start the server
// app.listen(PORT, () => {
//   console.log(`Now listening on port ${PORT}`);
// });



sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});

// const path = require('path');
// const express = require('express');
// const session = require('express-session');
// const exphbs = require('express-handlebars');
// const bcrypt = require('bcrypt');
// const routes = require('./controllers');
// const helpers = require('./utils/helpers');
// const sequelize = require('./config/connection');
// const SequelizeStoreConstructor = require('connect-session-sequelize')(session.Store);


// const app = express();
// const PORT = process.env.PORT || 3001;

// app.use(express.json()); // for parsing application/json
// app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded


// const hbs = exphbs.create({ helpers });


// app.engine('handlebars', hbs.engine);
// app.set ('view engine', 'handlebars');

// app.get('/', function (req, res) {
//   res.render('index', {title: 'RecipeHub', message: 'Hello!'});
// });


// // Define routes for your app
// app.get('/', (req, res) => {
//   res.send('Welcome to the Recipe Sharing App!');
// });

// // Add more routes here for creating, reading, updating, and deleting recipes
// app.post('/recipes', (req, res) => {
//   const { name, ingredients, instructions } = req.body;
//   // Save the recipe to a database or other storage system
//   res.status(201).json({ id: 1, name, ingredients, instructions });
// });

// // Get a list of all recipes
// app.get('/recipes', (req, res) => {
//   // Retrieve the list of recipes from a database or other storage system
//   const recipes = [
//     { id: 1, name: 'Spaghetti Bolognese', ingredients: ['spaghetti', 'tomato sauce', 'ground beef'], instructions: 'Cook spaghetti, brown beef, mix together.' },
//     { id: 2, name: 'Chicken Curry', ingredients: ['chicken', 'curry powder', 'coconut milk'], instructions: 'Cook chicken, mix with curry and coconut milk.' },
//   ];
//   res.json(recipes);
// });

// // Update an existing recipe
// app.put('/recipes/:id', (req, res) => {
//   const id = req.params.id;
//   const { name, ingredients, instructions } = req.body;
//   // Update the recipe in a database or other storage system
//   res.json({ id, name, ingredients, instructions });
// });

// // Delete an existing recipe
// app.delete('/recipes/:id', (req, res) => {
//   const id = req.params.id;
//   // Delete the recipe from a database or other storage system
//   res.sendStatus(204);
// });

// // Start the server
// app.listen(PORT, 3001, () => {
//   console.log(`Now Listening`);
// });








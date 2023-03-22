const express = require('express');
const { Connection } = require('pg');
const router = require('express').Router();
const recipe = require('../../models');  
const { sequelize } = require ('../../config/connection');
const withAuth = require('../../utils/helpers');


router.get('/recipe', (req, res) => {
  router.get('/', async (req, res) => {
    try {
        const recipes = await recipe.findAll();
       res.render('home', { recipes });
      } catch (error) {
        console.error(error);
        res.status(500).send('Server error');
       }
     });
});

router.post('/recipe', (req, res) => {
  // Handle POST request for recipes
});

module.exports = router;
// const express = require('express');
// const router = express.Router();
// const recipe = require('../../models/recipe');



// // Get a single recipe by ID
// router.get('/:id', async (req, res) => {
//   try {
//     const recipe = await Recipe.findByPk(req.params.id);
//     if (recipe) {
//       res.render('recipe', { recipe });
//     } else {
//       res.status(404).send('Recipe not found');
//     }
//   } catch (error) {
//     console.error(error);
//     res.status(500).send('Server error');
//   }
// });

// // Create a new recipe
// router.post('/', async (req, res) => {
//   try {
//     const { name, description, ingredients, instructions, image } = req.body;
//     const recipe = await Recipe.create({
//       name,
//       description,
//       ingredients,
//       instructions,
//       image
//     });
//     res.redirect(`/recipes/${recipe.id}`);
//   } catch (error) {
//     console.error(error);
//     res.status(500).send('Server error');
//   }
// });

// // Update a recipe by ID
// router.put('/:id', async (req, res) => {
//   try {
//     const { name, description, ingredients, instructions, image } = req.body;
//     const recipe = await Recipe.findByPk(req.params.id);
//     if (recipe) {
//       recipe.name = name;
//       recipe.description = description;
//       recipe.ingredients = ingredients;
//       recipe.instructions = instructions;
//       recipe.image = image;
//       await recipe.save();
//       res.redirect(`/recipes/${recipe.id}`);
//     } else {
//       res.status(404).send('Recipe not found');
//     }
//   } catch (error) {
//     console.error(error);
//     res.status(500).send('Server error');
//   }
// });

// // Delete a recipe by ID
// router.delete('/:id', async (req, res) => {
//   try {
//     const recipe = await Recipe.findByPk(req.params.id);
//     if (recipe) {
//       await recipe.destroy();
//       res.redirect('/recipes');
//     } else {
//       res.status(404).send('Recipe not found');
//     }
//   } catch (error) {
//     console.error(error);
//     res.status(500).send('Server error');
//   }
// });

// module.exports = recipeRoutes;

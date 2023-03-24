const router = require('express').Router();
const userRoutes = require('./userRoutes');
const recipeRoutes = require('./recipeRoutes');
const homeRoute = require('./index');

router.use('/user', userRoutes);
router.use('/recipe', recipeRoutes);
router.use('/index', homeRoute );



module.exports = router;


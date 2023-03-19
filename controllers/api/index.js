const router = require('express').Router();
const userRoutes = require('./userRoutes');
const projectRoutes = require('./recipeRoutes');

router.use('/user', userRoutes);
router.use('/recipe', recipeRoutes);

module.exports = router;

const router = require('express').Router();
const userRoutes = require('./userRoutes');
const recipeRoutes = require('./recipeRoutes');
const homeRoutes = require('./homeRoutes');

router.use('/user', userRoutes);
router.use('/recipe', recipeRoutes);
router.use('/', homeRoutes);



module.exports = router;


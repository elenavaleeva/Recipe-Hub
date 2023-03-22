const router = require('express').Router();
const userRoutes = require('./routes/userRoutes');
// const homeRoutes = require('./homeRoutes');
const recipeRoutes = require('./routes/recipeRoutes');

router.use('/user', userRoutes);
// router.use('/home', homeRoutes);

router.use('/recipes', recipeRoutes);


module.exports = router;
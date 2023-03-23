const router = require('express').Router();
const userRoutes = require('./routes/userRoutes');
// const homeRoutes = require('./homeRoutes');
const recipeRoutes = require('./routes/recipeRoutes');
const routes = require('./routes/routes');

router.use('/user', userRoutes);
// router.use('/home', homeRoutes);

router.use('/recipes', recipeRoutes);

router.use('/', routes);




module.exports = router;
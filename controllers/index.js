const router = require('express').Router();
const userRoutes = require('./routes/userRoutes');
const homeRoutes = require('./htmlRoutes');
const recipeRoutes = require('./routes/recipeRoutes');

router.use('/user', userRoutes);
router.use('/recipe', recipeRoutes);
router.use('/', homeRoutes);



module.exports = router;
const router = require('express').Router();
const userRoutes = require('./routes/userRoutes');
// const homeRoutes = require('./homeRoutes');
const recipeRoutes = require('./routes/recipeRoutes');

router.use('/user', userRoutes);
router.use('/recipe', recipeRoutes);




module.exports = router;
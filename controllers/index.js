const router = require('express').Router();
const apiRoutes = require('./routes');
const homeRoutes = require('./homeRoutes');
const recipeRoutes = require('./recipeRoutes');

router.use('/api', apiRoutes);
router.use('/', homeRoutes);
router.use('/dashboard', dashboardRoutes);

router.use('/recipes', recipeRoutes);













module.exports = router;
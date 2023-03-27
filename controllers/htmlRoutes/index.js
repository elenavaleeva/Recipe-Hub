const router = require('express').Router();
// const authChecker = require('../../utils/auth.js');

router.get('/', function (req, res) {
    res.render('home', { title: 'RecipeHub', message: 'Hello!' });
});

router.get('/api/user/login', (req, res) => {
    // if (req.session.logged_in) {
    //     res.redirect('/');
    //     return;
    // }
    console.log('login');
    res.render('login');

    // res.render('login', {
    // logged_in: req.session.logged_in,
    // userId: req.session.user_id,
    // });
    // return;
});

router.get('/home', function (req, res) {
    res.render('home');
});

router.get('/signup', (req, res) => {
    res.render('signup');
});

router.get('/recipe', (req, res) => {
    res.render('recipe');
});

router.get('/findMeal', function (req, res) {
    res.render('findMeal');
});


router.get('/addRecipe', function (req, res) {
    res.render('addRecipe');
});

router.get('/logout', function (req, res) {
    req.session.destroy();
});



module.exports = router;

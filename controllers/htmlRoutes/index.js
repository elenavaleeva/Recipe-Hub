const router = require('express').Router();
// const authChecker = require('../../utils/auth.js');

router.get('/', function (req, res) {
    res.render('home', { title: 'RecipeHub', message: 'Hello!' });
});

router.get('/login', (req, res) => {
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

router.get('/signup', (req, res) => {
    res.render('signup');
});

router.get('/recipe', function (req, res) {
    res.render('recipe',);
});






module.exports = router;

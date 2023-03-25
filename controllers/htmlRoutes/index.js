const router = require('express').Router();
// const authChecker = require('../../utils/auth.js');

router.get('/', async (req, res) => {
    res.render('home', {
        logged_in: req.session.logged_in,
        userId: req.session.user_id,
    });
});

router.get('/login', (req, res) => {
    if (req.session.logged_in) {
        res.redirect('/');
        return;
    }
    res.render('login');
    return;
    // res.render('login', {
    // logged_in: req.session.logged_in,
    // userId: req.session.user_id,
    // });
    // return;
});

module.exports = router;

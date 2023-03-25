const router = require('express').Router();
// const authChecker = require('../../utils/auth.js');

router.get('/', async (req, res) => {
    res.render('home', {
        logged_in: req.session.logged_in,
        userId: req.session.user_id,
    });
});

module.exports = router;

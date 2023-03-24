const express = require('express');
const router = express.Router();
const { User } = require('../models/user');


router.get('/', async (req, res) => {

  try {
    const users = await User.findAll();
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server error');

  }
});

router.post('/', async (req, res) => {
  try {
    const userData = await User.create(req.body);
    req.session.userId = userData.id;
    res.session.loggedIn = true;

    res.status(200).json(userData)

  } catch (error) {
    console.error(error);
    res.status(500).send('Server error');
  }
});

router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });
    if (user && (await bcrypt.compare(password, user.password))) {
      req.session.userId = user.id;
      req.session.loggedIn = true;
      res.status(200).json(user);

    } else {
      res.status(401).json({ message: 'Incorrect email or password' });


    }

    req.session.save(() => {
      res.session.userId = userData.id;
      res.session.loggedIn = true;

      req.json({ user: userData, message: 'You are now logged in!' });
    });

  } catch (error) {
    console.error(error);
    res.status(500).send('Server error');

  }
});

router.post('/logout', (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
      console.log('logged out');
    });

  } else {
    res.status(404).end();
  }
});

module.exports = router;


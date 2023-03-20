const express = require('express');
const router = express.Router();

router.get('/users', (req, res) => {
  // Handle GET request for users
});

router.post('/users', (req, res) => {
  // Handle POST request for users
});

module.exports = router;

// const express = require('express');
// const router = express.Router();
// const bcrypt = require('bcrypt');
// const User = require('../../models/user');

// // Signup user
// router.post('/signup', async (req, res) => {
//   try {
//     const { username, email, password } = req.body;
//     const hashedPassword = await bcrypt.hash(password, 10);
//     const user = await User.create({
//       username,
//       email,
//       password: hashedPassword
//     });
//     req.session.userId = user.id;
//     res.redirect('/recipes');
//   } catch (error) {
//     console.error(error);
//     res.status(500).send('Server error');
//   }
// });

// // Login user
// router.post('/login', async (req, res) => {
//   try {
//     const { email, password } = req.body;
//     const user = await User.findOne({ where: { email } });
//     if (user) {
//       const match = await bcrypt.compare(password, user.password);
//       if (match) {
//         req.session.userId = user.id;
//         res.redirect('/recipes');
//       } else {
//         res.status(401).send('Invalid email or password');
//       }
//     } else {
//       res.status(401).send('Invalid email or password');
//     }
//   } catch (error) {
//     console.error(error);
//     res.status(500).send('Server error');
//   }
// });

// // Logout user
// router.post('/logout', async (req, res) => {
//   try {
//     req.session.destroy();
//     res.redirect('/login');
//   } catch (error) {
//     console.error(error);
//     res.status(500).send('Server error');
//   }
// });

// module.exports = userRoutes;

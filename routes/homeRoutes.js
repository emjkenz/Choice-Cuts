const router = require('express').Router();
const { User, Product } = require('../models');
const withAuth = require('../utils/auth');

// Prevent non-logged-in users from viewing the homepage
router.get('/', async (req, res) => {

  Product.findAll()
  .then((products) => {
    const prod = products.map(product => product.get({plain: true}))
    res.render('homepage', {
      title: " - Homepage",
      products: prod,
      productCols: (products.length%2) > 0?4:3
    });
  })
});

// Update the path for the login route
router.get('/login', (req, res) => {
  // If a session exists, redirect the request to the homepage
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login', {title: " - Login"});
});

router.get('/dashboard', withAuth, async(req, res) => {
  try {
    const userData = await User.findAll({
      attributes: { exclude: ['password'] },
      order: [['name', 'ASC']],
    });

    const users = userData.map((project) => project.get({ plain: true }));

    res.render('dashboard', {
      users,
      // Pass the logged-in flag to the template
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(503).redirect('/login');
  }
  
  res.render('dashboard')
});

module.exports = router;


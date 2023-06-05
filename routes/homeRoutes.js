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

router.get('/dashboard/', withAuth, async(req, res) => {
  try {
    const userData = await User.findByPk(req.session.user_id)

    const user = userData.get({ plain: true });

    res.render('dashboard', user);
  } catch (err) {
    res.redirect('/login');
  }
});

module.exports = router;


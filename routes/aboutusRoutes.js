const router = require('express').Router();

router.get('/', async (req, res) => {
  try {
    // You can perform any necessary logic or database queries here
    
    const data = {
      pageTitle: 'About Us',
    
    };

    res.render('aboutus', data);
  } catch (err) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;


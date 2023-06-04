const router = require('express').Router();
const { Product } = require('../models');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

// Route to display search results by category
router.get('/', async (req, res) => {

  // Get the product name from the query
  const query = Object.keys(req.body).length > 0 ? req.body : req.query;
  // Find the product based on the query
  Product.findAll({
    where: {
      name: {
        [Op.like]: `%${query.query}%`
      }
    }
  })
    .then(search => {
      const products = search.map(product => product.get({ plain: true }));
      res.render('search', {
        products,
        productCols: (products.length % 2) > 0 ? 4 : 3,
        query: query.query,
      });
    });

});

module.exports = router;
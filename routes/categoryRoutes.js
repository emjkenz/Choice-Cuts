const router = require('express').Router();
const { Category, Product } = require('../models');

// Route to display search results by category
router.get('/search/:category', async (req, res) => {
  try {
    const { category } = req.params;

    // Find the category by name
    const categoryData = await Category.findOne({
      where: { category_name: category },
    });

    if (!categoryData) {
      // If category not found, handle the appropriate response
      return res.status(404).json({ message: 'Category not found' });
    }

    // Get the category ID
    const categoryId = categoryData.id;

    // Find all products in the category
    const productsData = await Product.findAll({
      where: { category_id: categoryId },
    });

    const products = productsData.map((product) => product.get({ plain: true }));

    res.render('search-results', { products });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;

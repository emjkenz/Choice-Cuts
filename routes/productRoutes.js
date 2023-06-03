const router = require('express').Router();
const { Product } = require('../models');

router.get('/:id', async (req, res) => {
    Product.findByPk(req.params.id)
    .then(product => {
        if (product) {
            const prod = product.get({ plain: true })
            res.render('productPage', prod)
        }
        else {
            res.status(404).render('404')
        }
    })
})

module.exports = router
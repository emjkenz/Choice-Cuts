const router = require('express').Router();
const homeRoutes = require('./homeRoutes.js');
const categoryRoutes = require('./categoryRoutes.js');
const productRoutes = require('./productRoutes.js');
const userRoutes = require('./userRoutes.js');
const aboutusRoutes = require('./aboutusRoutes');
const checkoutRoutes = require('./checkoutRoutes.js');

router.use('/checkout/', checkoutRoutes);
router.use('/login/', userRoutes);
router.use('/aboutus/', aboutusRoutes);
router.use('/search/', categoryRoutes);
router.use('/products/', productRoutes);
router.use('/', homeRoutes);

router.use((req, res) => {
    res.status(404).render('404')
});

module.exports = router;
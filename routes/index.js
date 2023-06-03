const router = require('express').Router();
const homeRoutes = require('./homeRoutes.js');
const categoryRoutes = require('./categoryRoutes.js');
const productRoutes = require('./productRoutes.js');
const userRoutes = require('./userRoutes.js');

router.use('/products/', productRoutes)
router.use('/', homeRoutes);

router.use((req, res) => {
    res.status(404).render('404')
});

module.exports = router;
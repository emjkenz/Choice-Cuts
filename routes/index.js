const router = require('express').Router();
const homeRoutes = require('./homeRoutes.js');
const categoryRoutes = require('./categoryRoutes.js');
const productRoutes = require('./productRoutes.js');
const userRoutes = require('./userRoutes.js');

router.use('/', homeRoutes);

router.use((req, res) => {
    res.send("<h1>Wrong Route!</h1>")
});

module.exports = router;
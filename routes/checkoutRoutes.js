const router = require('express').Router();

router.get('/', (req, res) => {
    console.log(req.session.items);
    res.render('checkout', {items:req.session.items})
})

router.post('/', (req, res) => {

    const query = Object.keys(req.body).length > 0 ? req.body : req.query;

    req.session.items = query.item;

    res.redirect('/checkout')
})


module.exports = router;
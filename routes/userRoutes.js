const router = require('express').Router();
const { User } = require('../models');
const bcrypt = require('bcrypt');

router.post('/', async (req, res) => {
    try {
        const login = Object.keys(req.body).length > 0 ? req.body : req.query;

        if (!login.email && !login.password) {
            res.render('login', {
                error: 'is-invalid',
                message: 'Please provide a username and password'
            })
            return;
        }

        const userData = await User.findOne({
            where: {
                email: login.email
            }
        });

        if (!userData) {
            res.render('login', {
                error: 'is-invalid',
                message: 'User does not exist',
            })
            return;
        }

        const user = userData.get({ plain: true })

        const validPassword = bcrypt.compareSync(login.password)

        if (!validPassword) {
            res.render('login', {
                error: 'is-invalid',
                message: 'Incorrect email or password, please try again',
            })
            return;
        }

        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.logged_in = true;
        });
        console.log("here");
        res.redirect('../dashboard')

    } catch (err) {
        console.log(err);
        res.status(400).json(err);
    }
});

router.post('/logout', (req, res) => {
    if (req.session.logged_in) {
        req.session.destroy(() => {
            res.status(204).end();
        });
    } else {
        res.status(404).end();
    }
});

module.exports = router;

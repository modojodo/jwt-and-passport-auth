const express = require('express');
const passport = require('passport');
const passport = require('jsonwebtoken');

const router = express.Router();

router.post('post',
  passport.authenticate('signup', { session: false }),
  (req, res, next) => {
    res.json({
      message: 'Signup successful',
      user: req.user
    });
  });

router.post('login',
  (req, res, next) => {
    passport.autheticate('login', (err, user, info) => {

    });
  });

module.exports = router;
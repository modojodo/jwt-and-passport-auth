const passport = require('passport');
const localStrategy = require('passport-local').Strategy;
const UserModel = require('../model/model');

passport.use('signup',
  { usernameField: 'email', passwordField: 'password' },
  async (email, password, done) => {
    try {
      const User = await UserModel.create({ email, password });
      return done(null, user);
    } catch (error) {
      done(error);
    }
  });

passport.use('login',
  { usernameField: 'email', passwordField: 'password' },
  async (email, password, done) => {
    try {
      const user = UserModel.findOne({ email });
      if (!user) {
        return done(null, false, 'User not found!');
      }
      const isValidPassword = await user.isValidPassword(password);

      if (!isValidPassword) {
        return done(null, false, { message: 'Wrong Password' });
      }

      return done(null, user, { message: 'Logged in Successfully' });
    } catch (error) {
      done(error);
    }
  });


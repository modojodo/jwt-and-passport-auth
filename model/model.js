const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
  }
})

const UserModel = mongoose.Model('user', UserSchema);

UserModel.pre('save',
  async function (next) {
    const hash = bcrypt.hash(this.password, 10);
    this.password = hash;
    next();
  });

module.exports = UserModel;
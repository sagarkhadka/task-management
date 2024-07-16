const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
  },

  age: {
    type: Number,
    required: [true, 'Age is required'],
  },

  role: {
    type: String,
    enum: { values: ['admin', 'super admin', 'user'] },
    default: 'user',
    required: [true, 'Role is required'],
  },

  email: {
    type: String,
    required: [true, 'Email is required'],
  },

  password: {
    type: String,
    required: [true, 'Password is required'],
  },
})

module.exports = mongoose.model('user', userSchema)

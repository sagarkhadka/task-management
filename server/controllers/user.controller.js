const user = require('..//models/user.model')

const getUser = async (req, res) => {
  const data = await user.find()

  res.status(201).json({
    success: true,
    count: data.length,
    data,
  })
}

const createUser = async (req, res) => {
  console.log(req.body)
  if (!req.body) {
    return res.status(500).json({
      success: false,
      message: `No data found`,
    })
  }

  const newUser = await user.create(req.body)

  res.status(200).json({
    success: true,
    message: 'New user created',
  })
}

module.exports = {
  getUser,
  createUser,
}

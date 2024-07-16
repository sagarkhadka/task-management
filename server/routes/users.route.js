const express = require('express')
const { getUser, createUser } = require('../controllers/user.controller')

const router = express.Router()

router.route('/').get(getUser).post(createUser)
// router.route('/:id').get('')

module.exports = router

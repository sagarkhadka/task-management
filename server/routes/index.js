const express = require('express')

const userRoute = require('./users.route')

const router = express.Router()

const defaultRouters = [
  {
    path: '/user',
    route: userRoute,
  },
]

defaultRouters.forEach((route) => {
  router.use(route.path, route.route)
})

module.exports = router

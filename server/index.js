const dotenv = require('dotenv')
const app = require('./app')
const connectDB = require('./config/db')

dotenv.config()
connectDB()

app.listen(process.env.PORT, () => {
  console.log(process.env.PORT)
})

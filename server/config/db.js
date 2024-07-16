const mongoose = require('mongoose')

const connectDB = async () => {
  try {
    mongoose.set('strictQuery', false)
    const connect = await mongoose.connect(process.env.MONGO_DB, {
      useNewUrlParser: true,
      // useUnifiedTopology: true,
    })
    console.log(`db connected: ${connect.connection.host}`)
  } catch (err) {
    console.log(err)
    process.exit(1)
  }
}

module.exports = connectDB

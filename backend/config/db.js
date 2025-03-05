require('dotenv').config();

const mongoose = require('mongoose')

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    console.log(
      `MongoDB Connected: ${conn.connection.host}`.cyan.underline.bold
    )
    console.log('MongoDB URI:', process.env.MONGO_URI);
  } catch (error) {
    console.log(`Error: ${error.message}`.red.underline.bold)
    process.exit(1) // exit process with failure
  }
}

module.exports = connectDB
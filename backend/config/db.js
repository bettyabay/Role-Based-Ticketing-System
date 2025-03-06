require('dotenv').config();

const mongoose = require('mongoose')

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/yourDatabaseName');
    console.log('MongoDB connected successfully'.green)
  } catch (error) {
    console.error(`Database connection error: ${error.message}`.red)
    process.exit(1) // exit process with failure
  }
}

module.exports = connectDB
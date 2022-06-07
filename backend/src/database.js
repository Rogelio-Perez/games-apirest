const mongoose = require('mongoose')
const { MONGODB_URI } = require('./config')

mongoose
  .connect(
    MONGODB_URI
  )
  .then(() => console.log('MongoDB Connected'))
  .catch((err) => console.error('Could not connect to MongoDB...', err))

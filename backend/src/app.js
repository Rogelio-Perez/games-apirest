const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const pkg = require('../package.json')

const app = express()

app.set('pkg', pkg)

// Middleware
app.use(cors())
app.use(express.json())
app.use(morgan('dev'))

app.get('/', (req, res) => {
  res.json({
    name: app.get('pkg').name,
    author: app.get('pkg').author,
    description: app.get('pkg').description,
    version: app.get('pkg').version
  })
})

app.use('/api/games',require('./routes/games.routes'))


module.exports = app

const app = require('./app')
require('./database')
const { PORT } = require('./config')

app.listen(PORT, () => {
  console.log('Server is running on PORT: ' + PORT)
  console.log(`Server: http://localhost:${PORT}/`)
  console.log('Press CTRL + C to stop')
})

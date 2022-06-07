const app = require('./app')
require('./database')
const { PORT } = require('./config')

app.listen(PORT, () => console.log('Port is listening on: ' + PORT))

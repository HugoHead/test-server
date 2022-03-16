const express = require('express')
const open = require('open')
const api = require('./src/api')
const port = 3000
let app = express()
app.use(express.static('dist'))
app.use('/api', api)
console.log(`Running on port ${port}`)
app.listen(port)
open(`http://localhost:${port}`)
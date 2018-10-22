// imports
let express = require('express')
let bodyParser = require('body-parser')
let photosRouter = require('./routers/photos-router').photosRouter

// constantes
const HOSTNAME = 'localhost'
const PORT = '8080'

// initialization
let server = express()
server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json())

// routers
server.use('/photos', photosRouter)

// server starting
server.listen(PORT, HOSTNAME, () => {
  console.log('Server listening')
})

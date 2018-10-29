/**
 * Photos API
 */

// imports
let express = require('express')
let bodyParser = require('body-parser')
let photosRouter = require('./routers/photos-router').photosRouter
let collectionsRouter = require('./routers/collections-router').collectionsRouter
let db = require('./database/db')

// constants
const HOSTNAME = 'localhost'
const PORT = '8080'

// initialization
let server = express()
server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json())

// routers
server.use('/photos', photosRouter)
server.use('/collections', collectionsRouter)

// http server starting
server.listen(PORT, HOSTNAME, () => {
  console.log('Http Server listening')
})

// database connection
db.connect()
  .then(() => console.log('Database connection success.'))
  .catch((err) => {
    console.log('Database connection failed.')
    process.exit(1)
  })




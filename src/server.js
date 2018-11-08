/**
 * Photos API
 */

// imports
import express from 'express'
import bodyParser from 'body-parser'
import * as photosRouter from './routers/photos-router'



// constants
const HOSTNAME = 'localhost'
const PORT = '8080'

// initialization
let server = express()
server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json())

// routers
server.use('/photos', photosRouter.getRouter())

// http server starting
server.listen(PORT, HOSTNAME, () => {
  console.log('Http Server listening')
})

// database connection
// db.connect()
//   .then(() => console.log('Database connection success.'))
//   .catch((err) => {
//     console.log('Database connection failed.')
//     process.exit(1)
//   })




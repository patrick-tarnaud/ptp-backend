/**
 * Photos API
 */

// imports
import express from 'express'
import bodyParser from 'body-parser'
import * as photosRouter from './routers/photos-router'
import cors from 'cors'



// constants
const HOSTNAME = 'localhost'
const PORT = process.env.PORT || 8080;

// initialization
let server = express()
server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json())

// CORS
server.use(cors())

// routers
server.use('/photos', photosRouter.getRouter())


// http server starting
server.listen(PORT, () => {
  console.log('Http Server listening')
})

// database connection
// db.connect()
//   .then(() => console.log('Database connection success.'))
//   .catch((err) => {
//     console.log('Database connection failed.')
//     process.exit(1)
//   })




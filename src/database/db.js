/**
 * Database
 */

// Imports
let mongoose = require('mongoose')

// Constants
// const MONGODB_CONNECTION = 'mongodb://localhost:27017/ptpdb'
const MONGODB_CONNECTION = 'mongodb://ptp:ptpptp7@ds139883.mlab.com:39883/ptpdb'

exports.connect = async () => {
  mongoose.connect(MONGODB_CONNECTION, { useNewUrlParser: true })
  await mongoose.connection
}
/**
 * Database management
 */
const MongoCient = require('mongodb').MongoClient

// connection URI
const PTP_DB = 'mongodb://localhost:27017/'

// mongoDB connection
let connection = {}

/**
 * Connect to ptpdb database
 * 
 * @returns {db} ptpdb database
 */
exports.connect = async () => {
  connection = await MongoCient.connect(PTP_DB, { useNewUrlParser: true })
  return connection.db('ptpdb')
}

/**
 * Close connection
 */
exports.close = async () => {
  connection.close()
}
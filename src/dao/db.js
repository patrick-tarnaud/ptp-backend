/**
 * Database management
 */
import { MongoClient } from 'mongodb'

// connection URI
const PTP_DB = 'mongodb://localhost:27018/'

/**
 * Connect to ptpdb database
 * 
 * @returns {db} ptpdb database
 */
export const connect = async () => {
  let connection = await MongoClient.connect(PTP_DB, { useNewUrlParser: true })
  return connection.db('ptpdb')
}


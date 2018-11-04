/**
 * Photo Database Management
 */
const db = require('./db')
const photosDB = require('./init/photos-db').photosDB

/**
 * Find photos in db
 * 
 * @returns {photo} the photos
 */
exports.findPhotos = async () => {
  let ptpdb = await db.connect()

  let photos = await ptpdb.collection('photos').find().toArray()
  db.close()

  return photos
}

/**
 * Create a photo in db
 * 
 * @param {photo} the photo to create
 * @returns {photo} the created photo with an id
 */
exports.createPhoto = async (photo) => {
  let ptpdb = await db.connect()

  let newPhoto = await ptpdb.collection('photos').insertOne(photo)
  db.close()

  return newPhoto.ops[0]
}

/**
 * Init
 */
exports.init = async () => {
  let ptpdb = await db.connect()
  await ptpdb.collection('photos').drop()
  await ptpdb.collection('photos').insertMany(photosDB)
  db.close()
}
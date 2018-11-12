/**
 * Photo Database Management
 */
import * as db from './db'
import { photosDB } from './init/photos-db'

/**
 * Find photos in db
 * 
 * @returns {photo} the photos
 */
export const findPhotos = async () => {
  let ptpdb = await db.connect()
  let photos = await ptpdb.collection('photos').find().toArray()
  return photos
}

/**
 * Create a photo in db
 * 
 * @param {photo} the photo to create
 * @returns {photo} the created photo with an id
 */
export const createPhoto = async (photo) => {
  let ptpdb = await db.connect()
  let newPhoto = await ptpdb.collection('photos').insertOne(photo)
  return newPhoto.ops[0]
}

/**
 * Init
 */
export const init = async () => {
  let ptpdb = await db.connect()
  await ptpdb.collection('photos').drop()
  let newPhotos = await ptpdb.collection('photos').insertMany(photosDB)
  return newPhotos.ops
}
/**
 * Photo Database Management
 */
import { db } from './gl-db'
import { photosDB } from './init/photos-db'

/**
 * Find photos in db
 * 
 * @returns {photo} the photos
 */
export const findPhotos = async () => {
  let photo
  let photosRes = []

  let photos = await db.collection('photos').get()

  photos.forEach(p => {
    photo = p.data()
    photo.id = p.id
    photosRes.push(photo)
  })

  return photosRes
}

/**
 * Create a photo in db
 * 
 * @param {photo} the photo to create
 * @returns {photo} the created photo with an id
 */
export const createPhoto = async (photo) => {
  // TODO
}

/**
 * Delete all photos 
 * 
 */
export const deleteAll = async () => {
  let photosColl = db.collection('photos')

  let photos = await photosColl.get()
  photos.forEach(async photo => {
    await photosColl.doc(photo.id).delete()
  })
}

/**
 * Init
 */
export const init = async () => {
  let photosColl = db.collection('photos')

  await deleteAll()

  photosDB.forEach(async photo => {
    await photosColl.add(photo)
  });

  let photos = await findPhotos()
  return photos
}


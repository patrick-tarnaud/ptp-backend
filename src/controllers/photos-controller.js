/**
 * Photos controller
 */
import * as PhotosDAO from '../dao/gl-photos-dao'

/**
 * Find photos
 * 
 * @returns {Photo} the photos
 */
export const findPhotos = async () => {
  return await PhotosDAO.findPhotos({})
}

/**
 * Create photo
 */
export const createPhoto = async (photo) => {
  return await PhotosDAO.createPhoto(photo)
}

export const deleteAll = async () => {
  return await PhotosDAO.deleteAll()
}

/**
 * Init
 */
export const init = async () => {
  let photos = await PhotosDAO.init()
  return photos
}
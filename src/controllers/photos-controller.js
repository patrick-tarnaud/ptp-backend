/**
 * Photos controller
 */
import * as PhotosDAO from '../dao/photos-dao'

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

/**
 * Init
 */
export const init = async () => {
  return await PhotosDAO.init()
}
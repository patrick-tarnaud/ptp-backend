/**
 * Photos controller
 */
let PhotosDAO = require('../dao/photos-dao')

/**
 * Find photos
 * 
 * @returns {Photo} the photos
 */
exports.findPhotos = async () => {
  return await PhotosDAO.findPhotos({})
}

/**
 * Create photo
 */
exports.createPhoto = async (photo) => {
  return await PhotosDAO.createPhoto(photo)
}

/**
 * Init
 */
exports.init = async () => {
  await PhotosDAO.init()
}
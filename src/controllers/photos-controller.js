/**
 * Photos controller
 */
let Photo = require('../database/photos-model').Photo

/**
 * Find photos
 * 
 * @returns {Photo} the photos
 */
exports.findPhotos = async () => {
  let photos = await Photo.find({})
  return photos
}

/**
 * Create photo
 */
exports.createPhoto = async (photo) => {
  let newPhoto = new Photo(photo)
  return await newPhoto.save()
}

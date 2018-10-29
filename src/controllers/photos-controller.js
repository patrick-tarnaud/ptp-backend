/**
 * Photos controller
 */
let Photo = require('../database/photos-model').Photo

/**
 * Find photos
 * 
 * @returns {Photo} the photos
 */
exports.findPhotos = (req, res) => {
  Photo.find({}, (err, photos) => {
    if (err) throw err
    res.send(photos)
  })
}

/**
 * Create photo
 */
exports.createPhoto = (req, res) => {
  let newPhoto = new Photo()

  newPhoto.imageFilename = req.body.imageFilename
  newPhoto.thumbnailFilename = req.body.thumbnailFilename
  newPhoto.title = req.body.title
  newPhoto.description = req.body.description

  newPhoto.save((err, photo) => res.send(photo))
}

// module.exports = { findPhotos, createPhoto }
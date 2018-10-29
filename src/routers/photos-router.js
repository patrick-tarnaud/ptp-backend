/**
 * Photos router
 */

// Imports
let express = require('express')
let photosController = require('../controllers/photos-controller')

exports.photosRouter = (() => {
  let router = express.Router()

  router.get('/', photosController.findPhotos)
  router.post('/', photosController.createPhoto)

  return router
})()

/**
 * Photos router
 */

// Imports
let express = require('express')
let photosController = require('../controllers/photos-controller')

exports.getRouter = () => {
  let router = express.Router()

  router.get('/', async (req, res) => {
    return res.send(await photosController.findPhotos())
  })

  router.post('/', async (req, res) => {
    return res.send(await photosController.createPhoto(req.body))
  })

  return router
}

/**
 * Photos router
 */

// Imports
import express from 'express'
import * as photosController from '../controllers/photos-controller'

export const getRouter = () => {
  let router = express.Router()

  router.get('/', async (req, res) => {
    res.send(await photosController.findPhotos())
  })

  router.post('/', async (req, res) => {
    res.send(await photosController.createPhoto(req.body))
  })

  router.delete('/', async (req, res) => {
    try {
      res.send(await photosController.deleteAll())
    } catch (error) {
      console.log(error)
    }
  })

  router.post('/init', async (req, res) => {
    try {
      let photos = await photosController.init()
      res.send(photos)
    } catch (error) {
      console.log(error)
    }
  })

  return router
}

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

  router.post('/init', async (req, res) => {
    res.send(await photosController.init())
  })

  return router
}

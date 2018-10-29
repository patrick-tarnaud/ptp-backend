/**
 * Collections router
 */

// Imports
let express = require('express')
let collectionsController = require('../controllers/collections-controller')

exports.collectionsRouter = (() => {
  let router = express.Router()

  router.get('/', collectionsController.findCollections)

  return router
})()

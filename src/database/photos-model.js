/**
 * Photo persistence management for MongoDB
 */
let mongoose = require('mongoose')

// Schema
let photoSchema = new mongoose.Schema({
  imageFilename: String,
  thumbnailFilename: String,
  title: String,
  description: String
})

// Model
exports.Photo = mongoose.model('photo', photoSchema) 
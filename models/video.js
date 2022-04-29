const { ObjectId } = require('mongodb')
const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Create Schema
const VideoSchema = new Schema({
    id : String,
    CreatedBy: String,
    videoSize: Number,
    viewerCount: Number,
})

module.exports = Video = mongoose.model('videos', VideoSchema)
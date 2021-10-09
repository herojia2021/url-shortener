const mongoose = require("mongoose")
const Schema = mongoose.Schema

const shortUrlSchema = new Schema({
  oriUrl: {
    type: String,
    unique: true,
    required: true,
  },
  code: {
    type: String,
    unique: true,
    required: true,
  },
})

module.exports = mongoose.model("ShortUrl", shortUrlSchema)

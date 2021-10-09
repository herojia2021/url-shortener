const mongoose = require("mongoose")
const Schema = mongoose.Schema

const shortUrlSchema = new Schema({
  oriUrl: {
    type: String,
    required: true,
  },
  code: {
    type: String,
    required: true,
  },
})

module.exports = mongoose.model("ShortUrl", shortUrlSchema)

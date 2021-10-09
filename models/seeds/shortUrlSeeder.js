const ShortUrl = require("../shortUrl")
const db = require("../../config/mongoose")

const shortUrlData = require("./shortUrl.json")

db.once("open", () => {
  shortUrlData.results.forEach((element) => {
    ShortUrl.create({
      oriUrl: element.oriUrl,
      code: element.code,
    })
  })

  console.log("Seed data created. Ctrl+C to Exit.")
})

const express = require("express")
const router = express.Router()
const ShotUrl = require("../../models/shortUrl.js")
const genShortCode = require("../../utility/genShortCode.js")

router.get("/", (req, res) => {
  res.render("home")
})

router.get("/:code", (req, res) => {
  const code = req.params.code
  ShotUrl.find({ code })
    .lean()
    .then((shortUrl) => {
      if (shortUrl.length === 0) {
        res.redirect("/")
      } else {
        res.redirect(shortUrl[0].oriUrl)
      }
    })
    .catch((error) => console.log(error))
})

router.post("/", (req, res) => {
  const oriUrl = req.body.oriUrl
  ShotUrl.find({ oriUrl })
    .lean()
    .then((shortUrl) => {
      if (shortUrl.length === 0) {
        const code = genShortCode()
        ShotUrl.create({ oriUrl, code })
          .then(() => res.redirect(`/success/${code}`))
          .catch((error) => console.log(error))
      } else {
        res.redirect(`/success/${shortUrl[0].code}`)
        console.log(shortUrl)
      }
    })
    .catch((error) => console.log(error))
})
module.exports = router

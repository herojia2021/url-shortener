const express = require("express")
const router = express.Router()
const ShotUrl = require("../../models/shortUrl.js")
const genShortCode = require("../../utility/genShortCode.js")

// 首頁, 輸入任意網址
router.get("/", (req, res) => {
  res.render("home")
})

// 請求產生短網址
router.post("/", (req, res) => {
  const oriUrl = req.body.oriUrl
  ShotUrl.find({ oriUrl })
    .lean()
    .then((shortUrl) => {
      if (shortUrl.length === 0) {
        // 沒有紀錄, 產生短網址, 導向成功頁面
        const code = genShortCode()
        ShotUrl.create({ oriUrl, code })
          .then(() => res.redirect(`/success/${code}`))
          .catch((error) => console.log(error))
      } else {
        // 有紀錄, 取得短網址, 導向成功頁面
        res.redirect(`/success/${shortUrl[0].code}`)
      }
    })
    .catch((error) => console.log(error))
})

// 短網址導向原網址
router.get("/:code", (req, res) => {
  const code = req.params.code
  ShotUrl.find({ code })
    .lean()
    .then((shortUrl) => {
      if (shortUrl.length === 0) {
        // 沒有紀錄, 顯示錯誤頁面
        res.render("notExist")
      } else {
        // 有紀錄, 導向原網址
        res.redirect(shortUrl[0].oriUrl)
      }
    })
    .catch((error) => console.log(error))
})

module.exports = router

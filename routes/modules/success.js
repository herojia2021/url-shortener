const express = require("express")
const router = express.Router()
const ShotUrl = require("../../models/shortUrl.js")
const env = require("../../config/env.js")

// 成功頁面
router.get("/:code", (req, res) => {
  const code = req.params.code
  ShotUrl.find({ code })
    .lean()
    .then((shortUrl) => {
      if (shortUrl.length === 0) {
        // 沒有紀錄, 顯示錯誤頁面
        res.render("notExist")
      } else {
        // 有紀錄, 顯示成功頁面
        res.render("success", { env, code })
      }
    })
    .catch((error) => console.log(error))
})

module.exports = router

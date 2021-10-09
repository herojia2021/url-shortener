const express = require("express")
const exphbs = require("express-handlebars")
const bodyParser = require("body-parser")
const env = require("./config/env.js")

const routes = require("./routes")
require("./config/mongoose")

// setup Application
const app = express()

// setup template engine
app.engine("hbs", exphbs({ extname: "hbs", defaultLayout: "main" }))
app.set("view engine", "hbs")

// setup static-file path
app.use(express.static("public"))

app.use(bodyParser.urlencoded({ extended: true }))

app.use(routes)

// Listen the server when it started
app.listen(env.port, () => {
  console.log(`Express is running on http://${env.domain}:${env.port}`)
})

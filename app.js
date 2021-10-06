const express = require("express")
const exphbs = require("express-handlebars")

const routes = require("./routes")

// setup Application
const app = express()
const port = 3000

// setup template engine
app.engine("hbs", exphbs({ extname: "hbs", defaultLayout: "main" }))
app.set("view engine", "hbs")

app.use(routes)

// Listen the server when it started
app.listen(port, () => {
  console.log(`Express is running on http://localhost:${port}`)
})

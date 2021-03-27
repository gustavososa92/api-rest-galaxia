const express = require("express")
const app = express()

app.set("port", process.env.PORT || 3000)

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use(require("./routes/routes"))

app.listen(app.get("port"), () => {
  console.log(`Server on port ${app.get("port")}\n`)
})

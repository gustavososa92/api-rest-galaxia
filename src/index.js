const express = require("express")
const app = express()
const { Galaxia } = require("./domain/galaxia")

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use(require("./routes/routes"))

app.listen(3000)

console.log(`Server on port 3000\n`)

var galaxia = new Galaxia()
galaxia.calcularDatosClimaticos()

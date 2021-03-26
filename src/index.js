const express = require("express")
const app = express()
const { Galaxia } = require("./domain/galaxia")

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use(require("./routes/routes"))

// app.use(require("./domain/galaxia"))
console.clear()
new Galaxia().calcularDatosClimaticos()

app.listen(3000)
console.log("Server on port 3000")

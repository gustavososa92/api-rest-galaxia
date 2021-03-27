const express = require("express")
const app = express()
const { Galaxia } = require("./domain/galaxia")

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use(require("./routes/routes"))
const galaxia = new Galaxia().calcularDatosClimaticos()
galaxia.getPeriodosDeSequia

app.listen(3000)
console.log("Server on port 3000")

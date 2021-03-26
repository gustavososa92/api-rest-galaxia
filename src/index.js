const express = require("express")
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use(require("./routes/routes"))
console.log("TEST")
new Galaxia().calcularDatosClimaticos()

app.listen(3000)
console.log("Server on port 3000")

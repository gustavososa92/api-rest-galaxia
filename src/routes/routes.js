const { Router } = require("express")
const router = Router()
const underscore = require("underscore")
const datosClima = require("./../database/database.json")

router.get("/clima", async (req, res) => {
  try {
    const id = req.query.dia
    if (!id) throw new Error("Debe especificar el parametro dia")
    const response = await getClimaDeldia(id)
    res.status(200).json(response)
  } catch (e) {
    res.status(400).json("Error al obtener el dato: " + e.message)
  }
})

const getClimaDeldia = async (dia) => {
  try {
    var datoBuscado = underscore.find(datosClima, (dato) => {
      return dato.dia == dia
    })
    if (!datoBuscado) throw new Error("No se encuentra en la base de datos")
    return datoBuscado
  } catch (e) {
    throw new Error(e.message)
  }
}

module.exports = router

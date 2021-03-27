const fs = require("fs")

const getClimaDeldia = async (req, res) => {
  try {
    const id = req.query.dia
    const response = await pool.query(`SELECT * FROM dias WHERE dia = $1`, [id])
    res.status(200).json(response.rows)
  } catch (e) {
    throw new Error("Error al obtener el dato:" + e.message)
  }
}
const saveArrayToFile = async (arrayDatos) => {
  try {
    const file = fs.createWriteStream("./src/database/database.json")
    const path = file.path
    const ultimoElemento = JSON.stringify(arrayDatos.pop())

    file.write(`[\n`)
    arrayDatos.map((el) => JSON.stringify(el)).forEach((estado) => file.write(`${estado},\n`))
    file.write(`${ultimoElemento}\n]`)

    file.on("finish", () => {
      console.log("Archivo Creado Correctamente: ", path)
    })

    file.on("error", (err) => {
      console.error("Error al escribir el archivo: ", err)
      throw err
    })

    file.end()
  } catch (e) {
    throw new Error("Error al generar el archivo:" + e.message)
  }
}

module.exports = { getClimaDeldia, saveArrayToFile }

const fs = require("fs")

const saveArrayToFile = async (arrayDatos) => {
  try {
    const file = fs.createWriteStream("./src/database/database.json")
    const path = file.path
    const ultimoElemento = condicionDTO(arrayDatos.pop())

    file.write(`[\n`)
    arrayDatos.map((el) => condicionDTO(el)).forEach((estado) => file.write(`${estado},\n`))
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

const condicionDTO = (condicion) => {
  return JSON.stringify({ dia: condicion.dia, clima: condicion.clima })
}

module.exports = { saveArrayToFile }

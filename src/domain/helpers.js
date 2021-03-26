var moment = require("moment")
moment().format()

const aRadianes = (grados) => {
  var pi = Math.PI
  return grados * (pi / 180)
}
const aGrados = (radianes) => {
  var pi = Math.PI
  return grados * (180 / pi)
}

const gradosNormalizadosde = (grados) => {
  return ((grados % 360) + 360) % 360
}

const calcularCantidadDias = (anios) => {
  var finicio = moment()
  var ffin = moment().add(anios, "y")
  return ffin.diff(finicio, "days")
}

const orientacionDelTriangulo = (A, B, C) => {
  // console.log("A:", A)
  // console.log("B:", B)
  // console.log("C:", C)
  var vectorU = A.vectorHacia(B)
  var vectorV = A.vectorHacia(C)
  // console.log(vectorU)
  // console.log(vectorV)
  var resultado = productoVectorial(vectorU, vectorV)
  return resultado
}
const productoVectorial = (U, V) => {
  return U.x * V.y - U.y * V.x
}

const casoPlanetasAlineados = (A, B, C) => {
  console.log("A:", A)
  console.log("B:", B)
  console.log("C:", C)
}

module.exports = {
  aRadianes,
  aGrados,
  gradosNormalizadosde,
  calcularCantidadDias,
  orientacionDelTriangulo,
  productoVectorial,
  casoPlanetasAlineados,
}

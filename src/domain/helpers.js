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

module.exports = {
  aRadianes,
  aGrados,
  gradosNormalizadosde,
  calcularCantidadDias,
}

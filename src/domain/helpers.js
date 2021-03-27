var moment = require("moment")
moment().format()

const aRadianes = (grados) => {
  var pi = Math.PI
  return grados * (pi / 180)
}

const gradosNormalizadosde = (grados) => {
  return ((grados % 360) + 360) % 360
}

const calcularCantidadDias = (anios) => {
  //para tener en cuenta los años bisiestos
  //se calcula de hoy a 10 años
  var finicio = moment()
  var ffin = moment().add(anios, "y")
  return ffin.diff(finicio, "days")
}

module.exports = {
  aRadianes,
  gradosNormalizadosde,
  calcularCantidadDias,
}

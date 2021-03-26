var moment = require("moment")
moment().format()

class Galaxia {
  constructor() {
    this.ferengi = new Planeta(-1, 500)
    this.betasoide = new Planeta(-3, 2000)
    this.vulcano = new Planeta(5, 1000)
    this.Datos = new Array()
    this.anios = 1
  }

  calcularDatosClimaticos() {
    var cantidadDias = calcularCantidadDias(this.anios)

    for (var i = 0; i < cantidadDias; i++) {
      var condicionDelDia = this.calcularParaDia(i)
      this.guardarCondicion
    }
  }

  calcularParaDia(dia) {}
}

class Planeta {
  constructor(velociadAngular, radio) {
    this.velociadAngular = velociadAngular
    this.radio = radio
  }

  getPosicion(tiempo) {
    var radianes = aRadianes(this.velociadAngular * tiempo)
    return new Posicion(this.getCoordenadaX(radianes), this.getCoordenadaY(radianes))
  }

  getCoordenadaX(angulo) {
    return this.radio * Math.cos(angulo)
  }

  getCoordenadaY(angulo) {
    return this.radio * Math.sin(angulo)
  }
}

class Posicion {
  constructor(x, y) {
    this.x = x
    this.y = y
  }

  vectorHacia(destino) {
    var posX = destino.x - this.x
    var posY = destino.y - this.Y
    return new Posicion(posX, posY)
  }
}

const aRadianes = (grados) => {
  var gradosNormalizados = gradosNormalizadosDe(grados)
  var pi = Math.PI
  return gradosNormalizados * (pi / 180)
}

const gradosNormalizadosde = (grados) => {
  return ((grados % 360) + 360) % 360
}

const calcularCantidadDias = (anios) => {
  var finicio = moment()
  var ffin = moment().add(anios, "y")
  return ffin.diff(finicio, "days")
}

module.exports = { Galaxia }

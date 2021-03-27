const { aRadianes, gradosNormalizadosde, calcularCantidadDias } = require("./helpers")
const {
  orientacionDelTriangulo,
  productoVectorial,
  estanAlineadas,
  casoPlanetasAlineados,
  casoPlanetasNoAlineados,
  SEQUIA,
  LLUVIA,
  OPTIMO,
  NO_INFO,
} = require("./reglasNegocio")

class Galaxia {
  constructor() {
    this.ferengi = new Planeta(-1, 500)
    this.betasoide = new Planeta(-3, 2000)
    this.vulcano = new Planeta(5, 1000)
    this.datos = new Array()
    this.anios = 10
  }

  calcularDatosClimaticos() {
    var cantidadDias = calcularCantidadDias(this.anios)
    for (var i = 0; i < cantidadDias; i++) {
      this.guardarCondicion(this.climaDelDia(i))
    }
    // console.log(this.datos)
    console.log("Sequia: ", this.getPeriodosDeSequia())
    console.log("Lluvia: ", this.getPeriodosDeLluvia())
    console.log("Optimo: ", this.getPeriodosDeOptimasCondiciones())
    console.log("No Info: ", this.getPeriodosDeSinInfo())
    console.log("Dias de Maxima LLuvia: ", this.getDiasDeMaximaLLuvia())
  }

  climaDelDia(dia) {
    var P1 = this.ferengi.getPosicion(dia)
    var P2 = this.vulcano.getPosicion(dia)
    var P3 = this.betasoide.getPosicion(dia)
    var sentidoDeP1P2P3 = orientacionDelTriangulo(P1, P2, P3)
    var sentidoDeSolP2P3 = productoVectorial(P2, P3)
    var sentidoDeSolP3P1 = productoVectorial(P3, P1)
    var sentidoDeSolP1P2 = productoVectorial(P1, P2)
    var clima = estanAlineadas(sentidoDeP1P2P3)
      ? casoPlanetasAlineados(sentidoDeSolP2P3, sentidoDeSolP3P1, sentidoDeSolP1P2)
      : casoPlanetasNoAlineados(sentidoDeP1P2P3, sentidoDeSolP2P3, sentidoDeSolP3P1, sentidoDeSolP1P2)
    var areaTriangulo = Math.abs(sentidoDeP1P2P3) / 2
    return new CondicionHolder(dia, clima, areaTriangulo)
  }

  guardarCondicion(condicionDelDia) {
    this.datos.push(condicionDelDia)
  }

  getPeriodosDeSequia() {
    return this.datos.filter((el) => el.clima == "Sequia").length
  }
  getPeriodosDeLluvia() {
    return this.datos.filter((el) => el.clima == "Lluvia").length
  }
  getPeriodosDeOptimasCondiciones() {
    return this.datos.filter((el) => el.clima == "Optimo").length
  }
  getPeriodosDeSinInfo() {
    return this.datos.filter((el) => el.clima == "Sin Info").length
  }
  getDiasDeMaximaLLuvia() {
    //Cuando el area del triangulo es maxima, tambien lo es el perimetro
    var maxima = Math.max(...this.datos.map((el) => el.areaTriangulo))
    var listaFiltrada = this.datos.filter((el) => el.clima == "Lluvia" && el.areaTriangulo == maxima)
    return listaFiltrada.map((el) => el.dia)
  }
}
class Planeta {
  constructor(velociadAngular, radio) {
    this.velociadAngular = velociadAngular
    this.radio = radio
  }

  getPosicion(tiempo) {
    var angulo = gradosNormalizadosde(this.velociadAngular * tiempo)
    var radianes = aRadianes(angulo)
    var posicion = new Posicion(this.getCoordenadaX(radianes), this.getCoordenadaY(radianes))
    posicion.anguloNormalizado = angulo
    return posicion
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
    this.anguloNormalizado = 0
  }

  vectorHacia(destino) {
    var posX = destino.x - this.x
    var posY = destino.y - this.y
    return new Posicion(posX, posY)
  }
}
class CondicionHolder {
  constructor(dia, clima, areaTriangulo) {
    this.dia = dia
    this.clima = clima
    this.areaTriangulo = areaTriangulo
  }
}

module.exports = { Galaxia }

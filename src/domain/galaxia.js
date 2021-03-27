const { aRadianes, aGrados, gradosNormalizadosde, calcularCantidadDias } = require("./helpers")
const { orientacionDelTriangulo, productoVectorial, casoPlanetasAlineados } = require("./reglasNegocio")

class Galaxia {
  constructor() {
    this.ferengi = new Planeta(-1, 500)
    this.betasoide = new Planeta(-3, 2000)
    this.vulcano = new Planeta(5, 1000)
    this.Datos = new Array()
    this.anios = 10
    this.SOL = new Posicion(0, 0)
  }

  calcularDatosClimaticos() {
    var cantidadDias = calcularCantidadDias(this.anios)
    console.log("*****************************")
    // cantidadDias = 1500
    // console.log("ojo se esta calculando para ", cantidadDias, " dias")
    console.log("Años calculados: ", this.anios)
    console.log("Dias totales: ", cantidadDias)
    console.log("*****************************")
    for (var i = 0; i < cantidadDias; i++) {
      this.guardarCondicion(this.climaDelDia(i))
    }
  }

  climaDelDia(dia) {
    var P1 = this.ferengi.getPosicion(dia)
    var P2 = this.vulcano.getPosicion(dia)
    var P3 = this.betasoide.getPosicion(dia)
    var orientacionGeneral = orientacionDelTriangulo(P1, P2, P3)
    if (orientacionGeneral == 0) {
      console.log("---------------------------------------------")
      console.log("Valor de producto Escalar: ", orientacionGeneral)
      console.log("round: ", Math.round(orientacionGeneral))
      console.log("Dia que estan alineados:", dia)
      return casoPlanetasAlineados(P1, P2, P3)
    }
  }
  guardarCondicion(condicionDelDia) {}
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
  constructor(dia, clima) {
    this.dia = dia
    this.clima = clima
  }
}

module.exports = { Galaxia }

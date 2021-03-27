const orientacionDelTriangulo = (A, B, C) => {
  var vectorU = A.vectorHacia(B)
  var vectorV = A.vectorHacia(C)
  return productoVectorial(vectorU, vectorV)
}

const productoVectorial = (U, V) => {
  return Math.trunc(U.x * V.y - U.y * V.x)
}

const estanAlineadas = (area) => {
  //Adopto un valor de orientacion minimo para considerar que se encuentran alineados
  //diferencias debido a que tengo puntos discretos (puntos por dia) y no tengo diametro de los planetas
  //de otra manera solo estaria alineados cuando lo esten por los centros de los planetas
  var minimo = 120000
  return Math.abs(area) <= minimo
}

const casoPlanetasAlineados = (sentidoDeSolP2P3, sentidoDeSolP3P1, sentidoDeSolP1P2) => {
  if (estanAlineadosConElSol(sentidoDeSolP2P3, sentidoDeSolP3P1, sentidoDeSolP1P2)) {
    return TiposDeClima().SEQUIA
  } else {
    return TiposDeClima().OPTIMO
  }
}

const estanAlineadosConElSol = (sentidoDeSolP2P3, sentidoDeSolP3P1, sentidoDeSolP1P2) => {
  //estan Alineados con el sol si cada par de puntos estan alineados con el sol
  return estanAlineadas(sentidoDeSolP2P3) && estanAlineadas(sentidoDeSolP3P1) && estanAlineadas(sentidoDeSolP1P2)
}

const casoPlanetasNoAlineados = (sentidoDeP1P2P3, sentidoDeSolP2P3, sentidoDeSolP3P1, sentidoDeSolP1P2) => {
  if (solDentroDelTriangulo(sentidoDeP1P2P3, sentidoDeSolP2P3, sentidoDeSolP3P1, sentidoDeSolP1P2)) {
    return TiposDeClima().LLUVIA
  } else {
    return TiposDeClima().NO_INFO
  }
}

const solDentroDelTriangulo = (sentidoDeP1P2P3, sentidoDeSolP2P3, sentidoDeSolP3P1, sentidoDeSolP1P2) => {
  //un punto P,es interior a un triangulo ABC, solo si el sentido/orientacion (producto vectorial) del triangulo formado por los puntos ABC
  //y los sentidos de cada triangulo formado por el punto P y un par de puntos, son iguales
  var signoP1P2P3 = Math.sign(sentidoDeP1P2P3)
  var signoSolP2P3 = Math.sign(sentidoDeSolP2P3)
  var signoSolP3P1 = Math.sign(sentidoDeSolP3P1)
  var signoSolP1P2 = Math.sign(sentidoDeSolP1P2)
  return signoP1P2P3 == signoSolP2P3 && signoSolP2P3 == signoSolP3P1 && signoSolP3P1 == signoSolP1P2
}

class TiposDeClima {
  static SEQUIA = "Sequia"
  static LLUVIA = "Lluvia"
  static OPTIMO = "Optimo"
  static NO_INFO = "Sin Info"
}

module.exports = {
  orientacionDelTriangulo,
  productoVectorial,
  estanAlineadas,
  casoPlanetasAlineados,
  casoPlanetasNoAlineados,
  TiposDeClima,
}

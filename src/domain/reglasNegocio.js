const orientacionDelTriangulo = (A, B, C) => {
  var vectorU = A.vectorHacia(B)
  var vectorV = A.vectorHacia(C)
  var resultado = productoVectorial(vectorU, vectorV)
  return Math.trunc(resultado)
}

const productoVectorial = (U, V) => {
  return U.x * V.y - U.y * V.x
}

const casoPlanetasAlineados = (A, B, C) => {
  console.log("A:", " --- X: ", A.x, " --- Y: ", A.y, " --- Phi: ", A.anguloNormalizado)
  console.log("B:", " --- X: ", B.x, " --- Y: ", B.y, " --- Phi: ", B.anguloNormalizado)
  console.log("C:", " --- X: ", C.x, " --- Y: ", C.y, " --- Phi: ", C.anguloNormalizado)
}
module.exports = {
  orientacionDelTriangulo,
  productoVectorial,
  casoPlanetasAlineados,
}

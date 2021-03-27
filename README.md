# SOLUCION CHALLENGE PLANETAS

## COMENTARIOS GENERALES DE LA SOLUCION

* El area del triangulo se puede calcular con el producto vectorial entre los vectores que se forman tomando 1 punto como vertice y los otros como extremos de los vectores. Area=(Prod Vectorial)/2
* El producto vectorial con su signo, nos da la orientacion del triangulo (respetando el orden de los Puntos)
* El perimetro maximo, lo deduzco del area maxima del triangulo
* Adopto sentido antihorario como positivo
* Para el dia en que no estan alineados y el sol no se encuentra dentro del triangulo coloque "Sin Info"
* Cree un archivo database.json para realizar las consultas para simplificar

*Para mas Información:* https://tecdigital.tec.ac.cr/revistamatematica/Contribucionesv3n2002/WMoraMatProg/pag2.html

## CONDICIONES

* Para determinar si 3 puntos estan alineados, el area que forma el triangulo al unir los 3 puntos es cero.
* Teniendo en cuenta que no tenemos los diametros de los planetas, las dimensiones del sistema, y que la posicion de cada cuerpo es discreta. Adopte un valor minimo para considerar que los puntos se encuentran alineados
* Para determinar si un punto P es interior a un tringulo ABC, solo si el sentido/orientacion (signo del producto vectorial) del triangulo formado por los puntos ABC y los sentidos de cada triangulo formado por el punto P y un par de puntos, son iguales


## RESULTADOS SEGUN LAS CONFIGURACIONES DEL SISTEMA

1. ¿Cuántos períodos de sequía habrá?

  Habra 41 períodos de sequía.

2. ¿Cuántos períodos de lluvia habrá y qué día será el pico máximo de lluvia?

  Habra 1167 períodos de lluvia. Siendo los de pico maximo los siguientes:
  
  Dias de Maxima Lluvia:  `[
    78,  102,  258,  282,  438,  462,
   618,  642,  798,  822,  978, 1002,
  1158, 1182, 1338, 1362, 1518, 1542,
  1698, 1722, 1878, 1902, 2058, 2082,
  2238, 2262, 2418, 2442, 2598, 2622,
  2778, 2802, 2958, 2982, 3138, 3162,
  3318, 3342, 3498, 3522
]`
  
3. ¿Cuántos períodos de condiciones óptimas de presión y temperatura habrá?

  Habra 122 períodos de condiciones óptimas.

## URL DE LA REST API

### https://api-rest-galaxia.herokuapp.com/clima?dia=0

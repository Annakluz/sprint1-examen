var estudiantes = [];

function obtenerListaEstudiantes() {

return estudiantes; //Debe regresar el arreglo
    // TO DO: Retornar la lista de estudiantes

}

function agregarEstudiante(nombre, puntosTecnicos, puntosHse) {

        var nombre = prompt("ingrese nombre alumna");  //se crea una lista de objetos
        var puntosTec = prompt("Puntos Tecnicos");
        var puntosHse = prompt("puntosHse");
        var estudiante = {
          "nombre": nombre,
          "puntosTec": puntosTec,
          "puntosHse" : puntosHse
        };

        estudiantes.push(estudiante); //el objeto resultante en este caso estudiante se agrega al arreglo estudiantes.
        return estudiante;  //regresamos el ultimo estudiante ingresado.

    }








function mostrar(estudiante) {
    // TO DO: Completar el template para que muestre las propiedades correctas del estudiante
    var resultado = "";
    resultado += "<div class='row'>";
    resultado += "<div class='col m12'>";
    resultado += "<div class='card blue-grey darken-1'>";
    resultado += "<div class='card-content white-text'>";
    resultado += "<p><strong>Nombre:</strong> " + estudiante.nombre + "</p>";
    resultado += "<p><strong>Puntos Técnicos:</strong> " + estudiante.puntosTec + "</p>";
    resultado += "<p><strong>Puntos HSE:</strong> " + estudiante.puntosHse + "</p>";
    resultado += "</div>";
    resultado += "</div>";
    resultado += "</div>";
    resultado += "</div>";
    return resultado;
}

function mostrarLista(estudiantes) {
  var estudiantesLista = ""; // se crea una variable con un string vacio para despues concatenar en este el resultado.
    for(i=0; i < estudiantes.length; i++){ //este ciclo sirve para ir mostrando la lista de estudiantes    // TO DO: Iterar la lista del estudiantes para devolverlos en el formato que usa la función mostrar(estudiante)
    // Retornar el template de todos los estudiantes
      estudiantesLista += mostrar(estudiantes[i]); // con esto mostramos  la lista de estudiantes se concatena para ir llenando el string vacio con cada iteracion.


  }
  return estudiantesLista;
}

function buscar(nombre, estudiantes) {
   var busquedaEstudiantes = estudiantes.filter (function (alumna){
     return alumna.nombre.tiUpperCase == nombre.toUpperCase;
   });

    // TO DO: Buscar el nombre en la lista de estudiantes que se recibe por parámetros
    // Retornar el objeto del estudiante buscado
    // Nota: NO IMPORTA SI EL USUARIO ESCRIBE EL NOMBRE EN MAYÚSCULAS O MINÚSCULAS

}

function topTecnico(estudiantes) { // hasta este punto funciona ..
  var ordenartecnico = estudiantes.sort(function(puntosA, puntosB){ //primer objeto contra siguente objeto arreglo
    return puntosB.puntosTec > puntosA.puntosTec;
  });
    // TO DO: Retornar el arreglo de estudiantes ordenado por puntaje técnico de mayor a menor

}

function topHSE(estudiantes) {
    var ordenarHse = estudiantes.sort(function(puntosA, puntosB){
      return puntosB.puntosHse > puntosA.puntosHse;
    })
    // TO DO: Retornar el arreglo de estudiantes ordenado por puntaje de HSE de mayor a menor

}

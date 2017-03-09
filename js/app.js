var estudiantes = [];

function obtenerListaEstudiantes() {

return estudiantes; //Debe regresar el arreglo
    // TO DO: Retornar la lista de estudiantes

}

function agregarEstudiante() {

  for(i=0; i<nEstudiantes; i++){ // se que debe ir un for para poder repetir la accion cada que se ponga una estudiante pero no se con que comparar
      var nEstudiantes = 7; // o puse al azar para poder identificar el error
       var estudiante = {};// esto deberia en teoria inicarme un arreglo
        estudiante.nombre = prompt("Ingresa el nombre " );
        estudiante.puntaje = prompt("Puntaje " );
        estudiante.puntosHse = prompt("Ingrese los puntos HSE" );
        estudiantes.push(estudiante); //para acomodarlo en la lista de la variable que nos da el arreglo vacio.
    }


    return (estudiante); // deberia regresarme el arreglo.

}

    // TO DO: Preguntar al usuario por el nombre, puntos técnicos y puntos de HSE de un estudiante
    // Hint: El estudiante debe ser agregado a la lista de estudiantes
    // TO DO: Retornar el estudiante recientemente creado
    /*PSEUDOCODIGO:
     “STUDENT RECORDS”
    FUNCIÓN AGREGAR:
    1.- Crear una lista de objetos con los siguientes atributos:
    			Nombre:
    			Puntos tecnicos:
    			Puntos HSE:

    		2.Cada uno de los atributos deberán aparecer en un prompt
    String “Ingrese nombre Alumna”.____
    Puntos tecnicos:
    Puntos HSE
    De manera tal que el valor nombre: sea el resultado del prompt 1
    3.Guardar la lista en un arreglo variable que sea un arreglo vacío; en este caso estudiantes [];
    Un for para repetir la accion  un push para acomodarlo al final */




function mostrar(estudiante) {
    // TO DO: Completar el template para que muestre las propiedades correctas del estudiante
    var resultado = "";
    resultado += "<div class='row'>";
    resultado += "<div class='col m12'>";
    resultado += "<div class='card blue-grey darken-1'>";
    resultado += "<div class='card-content white-text'>";
    resultado += "<p><strong>Nombre:</strong> " + estudiante + "</p>";
    resultado += "<p><strong>Puntos Técnicos:</strong> " + estudiante + "</p>";
    resultado += "<p><strong>Puntos HSE:</strong> " + estudiante + "</p>";
    resultado += "</div>";
    resultado += "</div>";
    resultado += "</div>";
    resultado += "</div>";
    return resultado;
}

function mostrarLista(estudiantes) {
    // TO DO: Iterar la lista del estudiantes para devolverlos en el formato que usa la función mostrar(estudiante)
    // Retornar el template de todos los estudiantes

}

function buscar(nombre, estudiantes) {
    // TO DO: Buscar el nombre en la lista de estudiantes que se recibe por parámetros
    // Retornar el objeto del estudiante buscado
    // Nota: NO IMPORTA SI EL USUARIO ESCRIBE EL NOMBRE EN MAYÚSCULAS O MINÚSCULAS

}

function topTecnico(estudiantes) {
    // TO DO: Retornar el arreglo de estudiantes ordenado por puntaje técnico de mayor a menor

}

function topHSE(estudiantes) {
    // TO DO: Retornar el arreglo de estudiantes ordenado por puntaje de HSE de mayor a menor

}

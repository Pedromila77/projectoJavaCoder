alert("Bienvenido a SCPuntofittnes");


let nombreApellido = prompt("Ingrese su Nombre y Apellido");


let edad = Number(prompt("¿Que edad tenes?"));

function activity(ejercicio, precio) {
    this.ejercicio = ejercicio;
    this.precio = precio; 
}
        const activity1 = new activity ("Aerobico", 100)
        const activity2 = new activity ("Musculacion", 200)
        const activity3 = new activity ("Crossfit", 150)
        const activity4 = new activity ("Zumba", 125)

let instruccion = [activity1, activity2, activity3, activity4];

saludar()
function saludar () {

    alert("Hola" + " " + nombreApellido + "." + " " + "Contanos un poco de vos.")
    console.log("Hola" + " " + nombreApellido + "." + " " + "Contanos un poco de vos.")
    obtenerDatos () 
}

function obtenerDatos () {
  
let mensaje = "Por favor, elige una actividad:\n";
instruccion.forEach((act, index) => {
  mensaje += `${index + 1}. ${act.ejercicio} ($${act.precio} por día)\n`;
});


let eleccion = prompt(mensaje);


if (isNaN(eleccion) || eleccion === null || eleccion.trim() === "") {
  alert("Por favor, ingresa un número válido.");
} else {
  eleccion = Number(eleccion);

  if (eleccion >= 1 && eleccion <= instruccion.length) {
    let actividadElegida = instruccion[eleccion - 1];

    
    let cantidadDias = prompt("Ingresa la cantidad de días por semana que deseas asistir (1-7):");

    
    if (isNaN(cantidadDias) || cantidadDias === null || cantidadDias.trim() === "") {
      alert("Por favor, ingresa un número válido para la cantidad de días por semana.");
    } else {
      cantidadDias = Number(cantidadDias);

      if (cantidadDias >= 1 && cantidadDias <= 7) {
        let costoMensual = actividadElegida.precio * cantidadDias * 4;
        alert(`¡Gracias por unirte a nuestros servicios!\nCosto mensual: $${costoMensual}`);
      } else {
        alert("La cantidad de días por semana debe estar entre 1 y 7.");
      }
    }
  } else {
    alert("Opción inválida. Por favor, elige una opción válida.");
  }
} }

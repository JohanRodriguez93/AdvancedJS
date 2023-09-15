// Ejercicio 1
function mostrarMensaje(callback, mensaje) {
    callback(mensaje);
  }
  
  mostrarMensaje(console.warn, "Este es un mensaje de advertencia");
  mostrarMensaje(console.log, "Este es un mensaje de registro");
  mostrarMensaje(console.info, "Este es un mensaje informativo");
  
  // Ejercicio 2
  function obtenerTipoDato(variable, callback) {
    callback(typeof variable, variable);
  }
  
  obtenerTipoDato("Hola", function(tipo, contenido) {
    console.log(`Tipo de dato: ${tipo}, Contenido: ${contenido}`);
  });
  
  // Ejercicio 3
  function operarNumeros(num1, num2, callback) {
    callback(num1, num2);
  }
  
  function suma(a, b) {
    console.log("Suma:", a + b);
  }
  
  function resta(a, b) {
    console.log("Resta:", a - b);
  }
  
  function multiplicacion(a, b) {
    console.log("Multiplicación:", a * b);
  }
  
  function division(a, b) {
    if (b !== 0) {
      console.log("División:", a / b);
    } else {
      console.error("No se puede dividir por cero");
    }
  }
  
  operarNumeros(10, 5, suma);
  operarNumeros(10, 5, resta);
  operarNumeros(10, 5, multiplicacion);
  operarNumeros(10, 5, division);
  
  // Ejercicio 4
  function convertirCadena(cadena, callback) {
    callback(cadena);
  }
  
  function mayus(cadena) {
    console.log(cadena.toUpperCase());
  }
  
  function minus(cadena) {
    console.log(cadena.toLowerCase());
  }
  
  convertirCadena("PejeLagarto", minus);
  convertirCadena("PejeLagarto", mayus);
  
  // Ejercicio 5
  function cantidadesMayoresADosHoras(array, callback) {
    const resultado = array.filter(cantidad => cantidad > 120);
    callback(resultado);
  }
  
  const tiempos = [120, 80, 200, 100];
  cantidadesMayoresADosHoras(tiempos, function(resultado) {
    console.log("Cantidades mayores a dos horas:", resultado);
  });
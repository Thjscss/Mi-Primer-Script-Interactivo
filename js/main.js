//mensaje de bienvenida al simulador
alert("Bienvenido a mi sitio web!");

// Captura de datos personales del usuario
const nombreUsuario = prompt("¿Como te llamas?");
console.log(nombreUsuario);
let edadUsuario = prompt("¿Cuantos años tenes?");
edadUsuario = parseInt(edadUsuario);
console.log(edadUsuario);

// Captura y conversión de datos para operación matemática
const numero1 = parseInt(prompt("Introduzca el primer numero que desea sumar"));
const numero2 = parseInt(prompt("Introduzca el segundo numero que desea sumar:"));

// Procesamiento aritmético de los datos ingresados
const calculo = numero1 + numero2;
console.log(calculo);

// Transformación de texto y salida de datos
const infoUsuario = nombreUsuario + " " + edadUsuario;
console.log(infoUsuario);

alert("si deseas realizar otra suma, recarga la pagina");
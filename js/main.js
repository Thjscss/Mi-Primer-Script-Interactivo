alert("Bienvenido a mi sitio web!");
let nombreUsuario = prompt("¿Como te llamas?");
console.log(nombreUsuario);
let edadUsuario = prompt("¿Cuantos años tenes?");
edadUsuario = parseInt(edadUsuario);
console.log(edadUsuario);
let numero1 = parseInt(prompt("Introduzca el primer numero que desea sumar"));
let numero2 = parseInt(prompt("Introduzca el segundo numero que desea sumar:"));
let calculo = numero1 + numero2;
console.log(calculo);

const infoUsuario = nombreUsuario + " " + edadUsuario;
console.log(infoUsuario);

alert("si deseas realizar otra suma, recarga la pagina");
alert("Bienvenido a mi sitio web!");
let nombreusuario = prompt("¿Como te llamas?");
console.log(nombreusuario);
let edadusuario = prompt("¿Cuantos años tenes?");
edadusuario = parseInt(edadusuario);
console.log(edadusuario);
let numero1 = prompt("Introduzca el primer numero que desea sumar");
numero1 = parseInt(numero1);
let numero2 = prompt("Introduzca el segundo numero que desea sumar:");
numero2 = parseInt(numero2);
let calculo = numero1 + numero2;
console.log(calculo);

const infoUsuario = nombreusuario + " " + edadusuario;
console.log(infoUsuario);

alert("si deseas realizar otra suma, recarga la pagina");
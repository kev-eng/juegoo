/*
const numeroSecreto = Math.floor(Math.random() * 10) + 1;
let intentos = 3; 

alert("¡Bienvenido al juego Adivina el Número Tienes 3 intentos para adivinar un número entre 1 y 10.");

while (intentos > 0) {
    let entrada = prompt("Introduce un número entre 1 y 10:");
    let numeroUsuario = parseInt(entrada);

    
    if (isNaN(numeroUsuario) || numeroUsuario < 1 || numeroUsuario > 10) {
        alert("Por favor, introduce un número válido entre 1 y 10.");
        continue; 
    }

    
    if (numeroUsuario === numeroSecreto) {
        alert("¡Felicidades! Adivinaste el número.");
        break; 
    } else {
        intentos--; 
        if (intentos > 0) {
            alert(`Número incorrecto. Te quedan ${intentos} intentos.`);
        } else {
            alert(` Se acabaron los intentos. El número era ${numeroSecreto}.`);
        }
    }
}
*/

// 1. Funciones

//Las funciones en JavaScript son bloques de código reutilizables que se ejecutan cuando se llaman. Permiten estructurar mejor el código y reducir la repetición. Existen diferentes tipos de funciones, como las declaradas, expresadas y de flecha.

// Declaración de una función tradicional
function saludar(nombre) {
    return `Hola, ${nombre}!`;
}
console.log(saludar("Juan"));

// Función de flecha
const sumar = (a, b) => a + b;
console.log(sumar(5, 3))

// 2. Arreglos

// Los arreglos en JavaScript son estructuras de datos que permiten almacenar varios valores en una sola variable.
let frutas = ["Manzana", "Banana", "Uva"];
frutas.push("Naranja"); // Agrega un elemento al final
console.log(frutas);
frutas.forEach(fruta => console.log(fruta));

// 3. Programación Orientada a Objetos
class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    presentar() {
        return `Hola, soy ${this.nombre} y tengo ${this.edad} años.`;
    }
}
const persona1 = new Persona("Carlos", 30);
console.log(persona1.presentar());

// 4. Manejo de eventos y el DOM

// El DOM (Document Object Model) permite la manipulación de elementos HTML mediante JavaScript.

// Capturar un botón y agregarle un evento de clic
const boton = document.getElementById("miBoton");
boton.addEventListener("click", () => {
    alert("Botón clickeado!");
});

// 5. Módulos
export function saludar(nombre) {
    return `Hola, ${nombre}!`;
}
import { saludar } from "./saludos.js";
console.log(saludar("Ana"));

// 6. Programación Asíncrona
// JavaScript maneja la asincronía con callbacks, promesas y async/await.
function obtenerDatos() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Datos obtenidos");
        }, 2000);
    });
}
async function mostrarDatos() {
    let datos = await obtenerDatos();
    console.log(datos);
}
mostrarDatos();
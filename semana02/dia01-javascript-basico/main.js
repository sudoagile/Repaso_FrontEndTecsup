/* console.log('Hola Javascript! 3') */

const numero1 = 20
const numero2 = 20.50
const numero3 = -36

console.log(numero1)
console.log(numero2)
console.log(numero3)

console.log(typeof numero1)
console.log(typeof numero2)
console.log(typeof numero3)

console.log(1%2)
console.log(2**3)
console.log(Math.pow(2,3))

console.log( 1 == 1) //true
console.log(1 == '1') //true
console.log(1 != '1') //false

console.log( 1 === 1) //true
console.log(1 === '1') //false ✅
console.log(1 !== '1') //false✅

console.log( true && false) //false
console.log( true || false) //true
console.log(!false) // NEGACIÓN 

const cadena1 = 'codigo'
const cadena2 = 'cadaga7'

console.log(cadena1.length)
console.log(cadena2.length)

console.log(cadena1.length === cadena2.length) // false

// 2. Retornar true si un numero es menor que 40 sino devolver false
// 3. Retornar True si un numero es menor que 60 sino devolver False
// 4. Retornar True si un numero es par sino devolver False
// 5. Retornar True si un numero es impar sino devolver False
// 6. calcular el area de un triangulo y mostrar su resultado si tenemos los valores base y altura
// 7. (TODO) Almacenar en una constante un número de 3 cifras y mostrar la suma de sus cifras elevada al cubo.
// 8. (TODO) Almacenar en una constante un monto de dinero, luego mostrar cuanto le toca a cada socio según la siguiente tabla:
// SOCIO A = 30%, SOCIO B = 20%, SOCIO C = 60%

// CONDICIONALES (IF)

if (true) {
    // El bloque que se ejecuta si la condición es verdadera (true)
  }

  const numero = 33

  const esPar = numero % 2 === 0

// CONDICIONALES (IF , ELSE)

if(esPar){
    console.log('Es número es par')
} else{
    console.log('Es número es impar')
}

// CONDICIONALES (IF, ELSE IF, ELSE)
let heroe = 'Spiderman'

if(heroe === 'Batman'){
    console.log('Hola,yo soy Bruce')
} else if (heroe === 'Spiderman'){
    console.log('Hola yo soy Peter')
} else if (heroe === 'Ironman'){
    console.log('Hola yo soy Tony')
} else{
    console.log('No soy un heroe 😋')
}

// CONDICIONALES (SWITCH)

heroe = 'Iroman'

switch (heroe) {
  case 'Batman':
    console.log('Hola soy Bruce')
    break
  case 'Spiderman':
    console.log('Hola soy Peter')
    break
  case 'Iroman':
    console.log('Hola soy Tony')
    break
  default:
    console.log('No soy un heroe :(')
}

//// ESTRUCTURAS REPETITIVAS

// FOR (Sirve para repetir una o varias instrucciones)

for (let i = 0; i < 10; i++) {
    console.log(i)
  }
  
// WHILE

let j = 0

while (j < 10) {
  console.log('while', j)
  // j = j + 1
  j++
}

// DO WHILE

let k = 0

do {
  console.log('do while', k)
  k = k + 1
  // k++
} while (k < 10)

    // 1. Determinar si la edad de una persona es mayor de edad o menor de edad mostrando 'Mayor de edad' o 'Menor de edad'

    const edadPersona = 38
    
    if (edadPersona >= 18) {
      console.log('Mayor de edad');
    } else {
      console.log('Menor de edad')
    }
    
    // 2. Retornar un saludo en tres diferentes lenguajes:
    //    - si es español mostrará 'Hola'
    //    - si es inglés mostrará 'Hello'
    //    - si es aimara mostrará 'kamisaraki'
    // 3. Si un numero es divisible entre 3 y 5 devolver 'fizzbuzz'
    //    Si un numero es divisible entre 3 devolver 'fizz'
    //    Si un numero es divisible entre 5 devolver 'buzz'
    //    De lo contrario devolver el mismo número
    // 4. Retornar true si un numero es primo sino devolver false
    //    Pista: un numero primo es divisible por sí mismo y por 1
    // 5. Devolver un valor que se incremente de dos en dos y devuelva los menores a 10
    
    // FUNCIONES (Son bloques de código que podemos reutilizar)

// Declaración
function nombreDeLaFuncion() {

}
// Ejecución, aquí estamos llamando a la función
nombreDeLaFuncion()

// Funciones sin parámetros

function imprimirMiNombre() {
    console.log("Hola soy Eduardo")
    console.log("Hola soy Frontend")
}

imprimirMiNombre()

// Funciones con parámetros y valores por defecto

function imprimirUnNombre(nombre = 'Anonimo') {
    console.log('Hola soy ' + nombre)
}
imprimirUnNombre()
imprimirUnNombre('Eduardo')

function imprimirNombreYApellido(nombre, apellido, edad){
    console.log('Hola soy '+nombre+' '+apellido+' y tengo '+edad+ ' años')

  // TEMPLATE STRINGS
  console.log(`Hola soy ${nombre} ${apellido} y tengo ${edad} años`)
}
//imprimirNombreYApellido()
imprimirNombreYApellido('Eduardo', 'Ramirez', 53)

// EJERCICIOS

// 1. Usando funciones determinar si la edad de una persona es mayor de edad o menor de edad mostrando 'Mayor de edad' o 'Menor de edad'

// FUNCIONES SIN RETORNO

function esMayorOMenorDeEdad(edad) {
  if (edad >= 18) {
    console.log('Mayor de edad')
  } else {
    console.log('Menor de edad')
  }
}

esMayorOMenorDeEdad(38)
esMayorOMenorDeEdad(8)
esMayorOMenorDeEdad(3)

// FUNCIONES CON RETORNO

function esMayorOMenorDeEdadConRetorno(edad) {
  if (edad >= 18) {
    return 'Mayor de edad'
  } else {
    return 'Menor de edad'
  }
}

const resultado = esMayorOMenorDeEdadConRetorno(15)

console.log('Resultado:', resultado)

console.log(esMayorOMenorDeEdadConRetorno(25))
console.log(esMayorOMenorDeEdadConRetorno(15))

// PROMPT -> para leer valores del usuario
// const tuEdad = prompt('Ingresa tu edad')

// console.log(tuEdad)
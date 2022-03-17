
const numeros = [1, 2, 3, 4, 5];
const resultado = numeros.reverse();
console.log("Original", numeros); //[5,4,3,2,1]
console.log("Resultado", resultado); //[5,4,3,2,1]
resultado.pop(); //remove o ultimo item
// numeros também é modificado, pois resultado é 
// uma referencia para números
console.log(numeros); //[5,4,3,2]



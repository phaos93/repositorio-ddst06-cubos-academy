//Exercicio - Slice

//Quero obter apenas os dois dígitos 
//do estado de uma cidade

const cidade = "Rio de Janeiro-RJ";

const penultimoIndex = cidade.length - 2;
let estado = cidade.slice(penultimoIndex);
console.log(estado);
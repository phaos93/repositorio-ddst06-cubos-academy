const opcoes = ["Uma", "Outra"];

let resultado = opcoes.join();
console.log(resultado); //Uma,Outra

resultado = opcoes.join("");
console.log(resultado); //UmaOutra

resultado = opcoes.join(" ou ");
console.log(resultado); //Uma ou Outra
// criando uma lista com 5 países

const paises = ['Brasil', 'Argentina', 'Espanha', 'Portugal', 'Inglaterra'];
console.log(paises);

//removendo um pais do fim da lista

paises.pop();
console.log(paises);

//adicionar um pais ao inicio
paises.unshift('China');
console.log(paises);

//removendo um pais do inicio
paises.shift();
console.log(paises);

//ultimo item da lista
const ultimo = paises[paises.length - 1];
console.log(ultimo);

//segundo pais da lista
console.log(paises[1]);

//pais de indice 2
console.log(paises[2]);
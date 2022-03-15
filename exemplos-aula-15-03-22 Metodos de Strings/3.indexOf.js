//saber se um email é válido
//tem que ter um pelo menos um @
//tem que ter pelo menos um ponto depois do @

const possivelEmail = "jose.messias@cubos.academy";

const indexArroba = possivelEmail.indexOf("@"); //4

const indexPontoAposArroba = possivelEmail.indexOf(".", indexArroba);

if (indexPontoAposArroba > indexArroba) {
    console.log("Email atende as requisições");
} else {
    console.log("Não há nenhum ponto após o arroba.");
}

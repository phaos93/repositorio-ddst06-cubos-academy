const pessoa = {
    nome: "José",
    altura: 1.73,
    peso: 60
};

pessoa['nome'] = "Pedro";
pessoa['altura'] = 1.80;
pessoa['peso'] = 70;

console.log(`Meu nome é ${pessoa.nome}, 
tenho ${pessoa.altura}m e peso ${pessoa.peso}kg.`);
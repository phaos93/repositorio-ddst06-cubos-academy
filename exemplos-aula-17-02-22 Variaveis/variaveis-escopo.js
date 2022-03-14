//o escopo são as variaveis dentro das chaves "{}" elas não serão reconhecidas no codigo fora das chaves
{
    const idade = 29;
}

console.log(idade);

//porém se a variavel for criada fora das chaves, ainda é possível utiliza-las dentro das chaves

const mesAniversario = "agosto";

{
    console.log(mesAniversario);
}
//nesse caso a variável será lida normalmente
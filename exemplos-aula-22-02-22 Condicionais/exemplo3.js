const temIngresso = true;
const estaComOsPais = true;
const censura = 16;
const idade = 19;

if (temIngresso) {
    if (idade >= censura || estaComOsPais) {
        console.log("Pode entrar");
    } else {
        console.log("Barrada");
    }
} else {
    console.log("Barrado");
}
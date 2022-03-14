const palavra = 'Salvador';

let contador = 0;

for (let letra of palavra) {
    if (letra === 'a') {
        contador++;
    }
}

console.log(contador);
const valorDaCompra = 100;
const numeroDeParcelas = 2;

if (numeroDeParcelas === 1) {
    //a vista com 10% de desconto
    const desconto = valorDaCompra * 0.1;
    console.log(`Você deve pagar ${valorDaCompra - desconto} reais, pois a vista tem 10% de desconto`);
} else {
    //parcelado
    const valorDaParcela = valorDaCompra / numeroDeParcelas;
    console.log(`Você deve pagar ${numeroDeParcelas} parcelas de ${valorDaParcela.toFixed(2)} reais`);
}
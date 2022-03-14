const valorDaCompra = 100;
const numeroDeParcelas = 12;

if (numeroDeParcelas === 1) {
    //a vista com 10% de desconto
    const desconto = valorDaCompra * 0.1;
    console.log(`Você deve pagar ${valorDaCompra - desconto} reais, pois a vista tem 10% de desconto`);
} else if (numeroDeParcelas >= 2 && numeroDeParcelas <= 6) {
    //parcelado
    const valorDaParcela = valorDaCompra / numeroDeParcelas;
    console.log(`Você deve pagar em ${numeroDeParcelas}x sem juros de ${valorDaParcela.toFixed(2)} reais`);
} else if (numeroDeParcelas >= 7 && numeroDeParcelas <= 12) {
    valorAPagarComJuros = (valorDaCompra * (1 + 1 / 100) ** numeroDeParcelas).toFixed(2);
    const valorDaParcela = (valorAPagarComJuros / numeroDeParcelas).toFixed(2)
    console.log(`Você deve pargar em ${numeroDeParcelas}x de R$ ${valorDaParcela} totalizando R$ ${valorAPagarComJuros}, devido a incidencia de juros`)
} else {
    console.log("Numero de parcelas inválido.");
}
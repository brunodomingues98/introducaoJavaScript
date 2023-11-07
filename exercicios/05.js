function formatarValorDecimal(valorDecimal) {
    valorEmReais = `R$ ${valorDecimal.toFixed(2).toString().replace(".", ",")}`       
}

formatarValorDecimal(0.1 + 0.2)

console.log(valorEmReais)
function jurosSimples(capitalInicial, taxaDeJuros, tempoAplicacao) {
    return capitalInicial + (capitalInicial * taxaDeJuros * tempoAplicacao)
}

function jurosCompostos(capitalInicial, taxaDeJuros, tempoAplicacao) {
    return capitalInicial * (1 + taxaDeJuros) ** tempoAplicacao
}

console.log(jurosSimples(100, 10/100, 2));
console.log(jurosCompostos(100, 10/100, 2));
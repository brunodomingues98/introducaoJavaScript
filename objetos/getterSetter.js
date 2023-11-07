const sequencia = {
    _valor: 1, // convenção, não significa que seja privado
    get valor() { // sem parâmetro
        return this._valor++
    },
    set valor(valor) { // com parâmetro
        if (valor > this._valor) {
            this._valor = valor
        }
    } 
}

console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 1000
console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 900
console.log(sequencia.valor, sequencia.valor)
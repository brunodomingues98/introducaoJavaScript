// coleção dinamica de pares chave/valor

const produto = new Object
produto.nome = 'Cadeira'
produto['marca do produto'] = 'Generica'
produto.preco = 220

console.log(produto)
delete produto.preco
delete produto['marca do produto']
console.log(produto)

const carro = {
    modelo: 'A4',
    valor: 89000,
    proprietatio: {
        nome: 'Raul',
        idade: 56,
        endereco: {
            logradouro: 'Rua ABC',
            numero: 123
        }
    },
    condutores: [{
        nome: 'Junior',
        idade: 19,
    }, {
        nome: 'Ana',
        idade: 42    
    }],
    calcaularValorSeguro: function() {
        //...
    }
}

carro.proprietatio.endereco.numero = 1000
carro['proprietatio']['endereco']['logradouro'] = 'Av Gigante'

console.log(carro)

// delete carro.condutores
delete carro.proprietatio.endereco
delete carro.calcaularValorSeguro
console.log(carro)
console.log(carro.condutores)
console.log(carro.condutores.length)

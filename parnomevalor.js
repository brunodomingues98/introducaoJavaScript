// PAR NOME/VALOR   

const saudacao = "Opa" // Contexto léxico 1

function exec(){
    const saudacao = "Falaaa" // Contexto léxico 2
    return saudacao
}

// Objeto são grupos aninhados de pares nome/valor
const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 80,
    endereco: {
        logradouro: 'Rua Muito Legal',
        nomero: 123
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)
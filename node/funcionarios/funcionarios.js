const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

const chineses = f => f.pais === 'China'
const mulheres = f => f.genero === 'F'
const menorSalario = (func, funcAtual) => {
    return func.salario < funcAtual.salario ? func : funcAtual
}

const frances = f => f.pais === 'France'
const homem = f => f.genero === 'M'
const maiorSalario = (func1, funcAtual1) => {
    return func1.salario > funcAtual1.salario ? func1 : funcAtual1
}

axios.get(url).then(response => {
    const funcionarios = response.data
    console.log(funcionarios)

    // mulher chinesa com menor salario
    const func = funcionarios
        .filter(chineses)
        .filter(mulheres)
        .filter(menorSalario)

    console.log(func)

    // homem frances com maior salario
    const func1 = funcionarios
        .filter(frances)
        .filter(homem)
        .filter(maiorSalario)

    console.log(func1)
})
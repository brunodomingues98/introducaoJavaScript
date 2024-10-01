// não aceita repetição/ não indexada

const times = new Set()
times.add('Corinthians')
times.add('Vasco')
times.add('São Paulo').add('Palmeiras').add('Santos')
times.add('Botafogo')
times.add('Corinthians')

console.log(times)
console.log(times.size)
console.log(times.has('corinthians'))
console.log(times.has('Corinthians'))
times.delete('São Paulo')
console.log(times.has('São Paulo'))

const nomes = ['Raquel', 'Lucas', 'Julia', 'Lucas']
const nomesSet = new Set(nomes)
console.log(nomesSet)
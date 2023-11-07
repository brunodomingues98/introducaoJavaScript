const pessoa = {
    nome: "Bruno",
    idade: 23,
    peso: 80
}

console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))

Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${[chave]} : ${[valor]}`)
})

Object.defineProperty(pessoa, 'DataNascimento', {
    enumerable: true,
    writable: false,
    value: '15/12/1998'
})

pessoa.DataNascimento = '01/01/2000'
console.log(pessoa.DataNascimento)
console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))

// Obeject.assign (ECMAScript 2015)
const dest = { a: 1 }
const o1   = { b: 2 }
const o2   = { c: 3, a: 4 }
const obj  = Object.assign(dest, o1, o2)
console.log(Object.assign(obj))

Object.freeze(obj)
obj.c = 1234
console.log(obj)
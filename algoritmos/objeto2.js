console.log(typeof Object) // FUNÇÃO
console.log(typeof new Object) //OBJETO

const Cliente = function() {} 
console.log(typeof Cliente) // FUNÇÃO
console.log(typeof new Cliente) //OBJETO

class Produto {}
console.log(typeof Produto) // FUNÇÃO
console.log(typeof new Produto()) //OBJETO

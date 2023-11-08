const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() // Massa quebrou o carro, remove o último elemento
console.log(pilotos)

pilotos.push('Verstappen') // Adiciona um novo elemento
console.log(pilotos)

pilotos.shift() // Remove elemento da primeira posição
console.log(pilotos)

pilotos.unshift('Hamilton') // Adiciona elemento na primeira posição
console.log(pilotos)

// splice() pode adicionar e remover elementos no array
pilotos.splice(2, 0, 'Bottas', 'Massa') // Adiciona
console.log(pilotos)

pilotos.splice(3, 1) // Remover
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) // Novo arrau
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1 ,4)
console.log(algunsPilotos2)
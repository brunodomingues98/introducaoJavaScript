function triangulo(lado1, lado2, lado3) {
    if (lado1 == lado2 && lado2 == lado3) {
         return 'Equilatero'
    }
    else if (lado1 == lado2 || lado2 == lado3 || lado1 == lado3)  {                
        return 'Isósceles'
    }
    else {
        return 'Escaleno'
    }
}

console.log(triangulo(2, 2, 2));
console.log(triangulo(2, 5, 5));
console.log(triangulo(2, 3, 4));
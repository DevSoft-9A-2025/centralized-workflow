function calcularPromedio(lista) {
    const suma = lista.reduce((a, b) => a + b, 0);
    return suma / lista.length;
}
console.log(calcularPromedio([10, 8, 9])); 

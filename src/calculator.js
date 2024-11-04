// Função de adição
function add(a, b) {
    return a + b;
}

// Função de subtração
function subtract(a, b) {
    return a - b;
}

// Função de multiplicação
function multiply(a, b) {
    return a * b;
}

// Função de divisão
function divide(a, b) {
    if (b === 0) {
        throw new Error("Cannot divide by zero");
    }
    return a / b;
}

// Exportação para usar nos testes
module.exports = { add, subtract, multiply, divide };
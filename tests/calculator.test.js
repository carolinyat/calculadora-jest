const { add } = require('../src/calculator');

// Teste da função de adição
test('adds 2 + 3 to equal 5', () => {
    expect(add(2, 3)).toBe(5);
});

// Teste falha da função de adição
test('adds 2 + 3 to not equal 4', () => {
    expect(add(2, 3)).not.toBe(4);
});


const { subtract } = require('../src/calculator');

//teste para função de subtração:
test('subtracts 7 - 3 to equal 4', () => {
    expect(subtract(7, 3)).toBe(4);
});

//falha da função de subtração:
test('subtracts 7 - 3 to not equal 5', () => {
    expect(subtract(7, 3)).not.toBe(5);
});



const { divide } = require('../src/calculator');

//teste da função de divisão:
test('divides 10 / 2 to equal 5', () => {
    expect(divide(10, 2)).toBe(5);
});

//teste da falha da função de divisão:
test('divides 10 / 2 to not equal 4', () => {
    expect(divide(10, 2)).not.toBe(4);
});

//teste de divisão que resulta em decimal:
test('divides 7 / 2 to equal 3.5', () => {
    expect(divide(7, 2)).toBe(3.5);
});

//teste de divisão entre números negativos:
test('divides -6 / 3 to equal -2', () => {
    expect(divide(-6, 3)).toBe(-2);
});

//teste da divisão por zero:
test('divides by zero to throw error', () => {
    expect(() => divide(5, 0)).toThrow("Cannot divide by zero");
});

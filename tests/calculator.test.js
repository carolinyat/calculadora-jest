const { add } = require('../src/calculator');

// Teste da função de adição
test('adds 2 + 3 to equal 5', () => {
    expect(add(2, 3)).toBe(5);
});
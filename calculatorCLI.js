const prompt = require("prompt-sync")({ sigint: true });
const { add, subtract, multiply, divide } = require("./src/calculator");

function main() {
    console.log("=== Bem-vindo! ===");

    while (true) {
        console.log("\nEscolha uma operação:");
        console.log("1 - Adição (+)");
        console.log("2 - Subtração (-)");
        console.log("3 - Multiplicação (×)");
        console.log("4 - Divisão (÷)");
        console.log("5 - Sair");

        const operation = prompt("Digite o número da operação desejada: ");
        
        if (operation === "5") {
            console.log("Saindo...");
            break;
        }

        const num1 = parseFloat(prompt("Digite o primeiro número: "));
        const num2 = parseFloat(prompt("Digite o segundo número: "));

        let result;
        try {
            switch (operation) {
                case "1":
                    result = add(num1, num2);
                    console.log(`Resultado: ${num1} + ${num2} = ${result}`);
                    break;
                case "2":
                    result = subtract(num1, num2);
                    console.log(`Resultado: ${num1} - ${num2} = ${result}`);
                    break;
                case "3":
                    result = multiply(num1, num2);
                    console.log(`Resultado: ${num1} × ${num2} = ${result}`);
                    break;
                case "4":
                    result = divide(num1, num2);
                    console.log(`Resultado: ${num1} ÷ ${num2} = ${result}`);
                    break;
                default:
                    console.log("Operação inválida. Por favor, escolha uma opção de 1 a 5.");
            }
        } catch (error) {
            console.error("Erro:", error.message);
        }
    }
}

main();

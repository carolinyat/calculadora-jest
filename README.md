# calculadora-jest

Este é um projeto de uma calculadora simples com testes unitários utilizando o framework Jest. Este projeto foi criado para fins educacionais, servindo como exemplo de como configurar e testar uma aplicação JavaScript utilizando Jest.

## Funcionalidades

A calculadora possui as seguintes operações básicas:

- Adição: Soma de dois números.
- Subtração: Subtração de um número pelo outro.
- Multiplicação: Multiplicação de dois números.
- Divisão: Divisão de um número pelo outro (com verificação para evitar divisão por zero).

## Pré-requisitos

Node.js e npm instalados no sistema.

## Instalação
Para configurar o projeto localmente, siga os passos abaixo:

1. Clone o repositório:
```
git clone https://github.com/carolinyat/calculadora-jest.git
```

2. Entre no diretório do projeto:
```
cd calculadora-jest
```

3. Instale as dependências:
```
npm install
```

## Executando a calculadora CLI 

Para iniciar a calculadora no terminal, execute:
```
node calculatorCLI.js
```

## Executando os Testes
Os testes foram escritos com o Jest e cobrem cada uma das operações da calculadora. Para rodar os testes, use o seguinte comando:

```
npm test
```

Após rodar o comando, o Jest executará os testes e exibirá o resultado no terminal, indicando quais testes passaram ou falharam.

### Relatorio de testes
Toda run da pipeline gera um relatorio de teste junit.xml contido no diretorio: 

```
test-results
```

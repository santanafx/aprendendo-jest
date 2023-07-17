const calcularValorPedido = require("./calcular-valor-pedido");

it("não deve cobrar valor de frente quando valodr dos produtos for superior a 500", () => {
    // AAA - 3 passos de criacao deum teste

    //ARRANG - ARRUMAR - O OBJETO DE TESTE
    const meuPedido = {
        itens: [
            { nome: "Arco encantado", valor: 2000 },
            { nome: "Entrega", valor: 100, entrega: true },
        ],
    };

    //ACT - AÇÃO - O QUE VAI SER TESTADO
    const resultado = calcularValorPedido(meuPedido);

    //ASSERT - ASSERÇÃO - QUAL O RESULTADO ESPERADO
    expect(resultado).toBe(2000);
});

it("deve cobrar valor de frete quando valor dos produtos for menos que 500", () => {
    //ARRANGE
    const meuPedido = {
        itens: [
            { nome: "Sanduiche", valor: 50 },
            { nome: "Entrega", valor: 100, entrega: true },
        ],
    };
    //ACT
    const resultado = calcularValorPedido(meuPedido);

    //ASSERT
    expect(resultado).toBe(150);
});

it("deve cobrar valor de frete caso valor dos produtos seja EXATAMENTE 500", () => {
    //ARRANGE
    const meuPedido = {
        itens: [
            { nome: "Sanduiche bem caro", valor: 500 },
            { nome: "Entrega", valor: 100, entrega: true },
        ],
    };

    const resultado = calcularValorPedido(meuPedido);

    expect(resultado).toBe(600);
});

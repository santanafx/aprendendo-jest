import "./App.css";
import React from "react";

function App() {
    const meuPedido = {
        itens: [
            { nome: "Poção de vida", valor: 100 },
            { nome: "Espada de prata", valor: 1000 },
            { nome: "Entrega", valor: 40, entrega: true },
        ],
    };

    const calcularValorPedido = (pedido) => {
        const valorProdutos = pedido.itens
            .filter((item) => !item.entrega)
            .reduce(
                (totalPedidos, pedidoAtual) => totalPedidos + pedidoAtual.valor,
                0
            );

        const entrega = pedido.itens.filter((item) => item.entrega);

        if (valorProdutos > 500) {
            return valorProdutos;
        } else {
            return valorProdutos + entrega[0].valor;
        }
    };

    console.log(calcularValorPedido(meuPedido));

    const [message, setMessage] = React.useState(
        "Let`s learn more about testing in React"
    );

    return (
        <div>
            <h1>Hello world!</h1>
            <p>{message}</p>
            <button onClick={() => setMessage("New message!")}>
                Change message
            </button>
        </div>
    );
}

export default App;

import { fireEvent, getByText, render, screen } from "@testing-library/react";
import App from "./App";

const sum = (x, y) => {
    return x + y;
};

describe("App component", () => {
    it.skip("should sum correctly", () => {
        // arrange, act, assert
        expect(sum(4, 4)).toBe(8);
    });

    it.skip("should render App with hello message", () => {
        render(<App />);

        screen.getByText("Hello world!");
    });

    it("shoud change message on button click", () => {
        render(<App />);
        screen.getByText("Let`s learn more about testing in React");

        const button = screen.getByText(/Change message/i);

        fireEvent.click(button);

        screen.getByText(/new message!/i);

        const oldMessage = screen.queryByText(
            "Let`s learn more about testing in React"
        ); //nao falha o teste se nao achar o texto.queryByText, .getByText falha o teste

        // expect(oldMessage).toBeNull(); //garante que a msg acima não está na página, ela é nula

        expect(oldMessage).not.toBeInTheDocument();
    });
});

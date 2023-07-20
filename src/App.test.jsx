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

    it.skip("shoud change message on button click", () => {
        render(<App />);
        screen.getByText("Let`s learn more about testing in React");

        const button = screen.getByText(/Change message/i);

        fireEvent.click(button);

        screen.getByText(/new message!/i);
    });
});

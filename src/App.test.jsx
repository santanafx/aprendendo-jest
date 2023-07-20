import { render, screen } from "@testing-library/react";
import App from "./App";

const sum = (x, y) => {
    return x + y;
};

describe("App component", () => {
    it("should sum correctly", () => {
        // arrange, act, assert
        expect(sum(4, 4)).toBe(8);
    });

    it("should render App with hello message", () => {
        render(<App />);

        screen.getByText("Hello world!");
    });
});

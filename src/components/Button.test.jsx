import { Button } from "./Button";
import { render, screen } from "@testing-library/react";

describe("Button component", () => {
    //teste de estilo
    it("should render with reb background if disabled", () => {
        render(<Button disabled>Click me</Button>);

        const button = screen.getByRole("button", { name: "Click me" });

        expect(button).toHaveStyle({ backgroundColor: "red" });
    });
});

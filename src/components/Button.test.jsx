import { Button } from "./Button";
import { fireEvent, render, screen } from "@testing-library/react";

describe("Button component", () => {
    //teste de estilo
    it.skip("should render with reb background if disabled", () => {
        render(<Button disabled={false}>Click me</Button>);

        const button = screen.getByRole("button", { name: "Click me" });

        expect(button).toHaveStyle({ backgroundColor: "blue" });
    });

    it.skip("should call onClick prop on click", () => {
        //teste para verificar uma chamada de função ao apertar um botão
        const onClick = jest.fn();
        render(
            <Button disabled onClick={onClick}>
                Click me
            </Button>
        );

        const button = screen.getByText(/click me/i);

        fireEvent.click(button);

        // expect(onClick).toHaveBeenCalled();
        // expect(onClick).toHaveBeenCalledWith(10);
    });
});

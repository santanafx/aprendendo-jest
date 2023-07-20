import React from "react";

export const Button = ({ children, disabled }) => {
    return (
        <button style={{ backgroundColor: disabled ? "red" : "blue" }}>
            {children}
        </button>
    );
};

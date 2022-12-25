import React from "react";
import css from "../../styles/Button.module.css";

const Button = ({ to, children }: { to?: string; children: React.ReactNode }) => {
    const handleScroll = (to: string) => () => {
        //NOTE: Look at comment in Navigation.tsx
        const element = document.getElementById(to);
        element?.scrollIntoView({ behavior: "smooth" });
    };
    return (
        //TODO: BEM positioning and custom components - what's the best approach?
        <button className={css.button} type='button' onClick={handleScroll("projects")}>
            {children}
        </button>
    );
};

export default Button;

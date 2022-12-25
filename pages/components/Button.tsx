import React from "react";
import css from "../../styles/Button.module.css";
import { combineClasses } from "../../utils/utlis";

const Button = ({
    to = "",
    positioning = "",
    children,
}: {
    to?: string;
    positioning?: string;
    children: React.ReactNode;
}) => {
    const handleScroll = (to: string) => () => {
        //NOTE: Look at comment in Navigation.tsx
        const element = document.getElementById(to);
        element?.scrollIntoView({ behavior: "smooth" });
    };
    return (
        //TODO: BEM positioning and custom components - what's the best approach?
        <button className={combineClasses([css.button, positioning])} type='button' onClick={handleScroll(to)}>
            {children}
        </button>
    );
};

export default Button;

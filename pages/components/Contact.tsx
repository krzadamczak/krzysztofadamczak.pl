import React, { useRef } from "react";
import css from "../../styles/Contact.module.css";
import Button from "./Button";

const Contact = () => {
    const aRef = useRef<HTMLAnchorElement>(null);
    const handleEmail = () => {
        if (aRef === null && aRef === undefined) return;

        aRef.current?.setAttribute("href", "mailto: krzadamczak@gmail.com");
        console.log(aRef.current?.href);
    };
    return (
        <section className={css.contact}>
            <p className={css.contact__text}>Zainteresowany podjęciem współpracy?</p>{" "}
            <a ref={aRef} onClick={handleEmail}>
                Napisz do mnie!
            </a>
        </section>
    );
};

export default Contact;

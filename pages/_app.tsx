import "../styles/globals.css";
import "../styles/_variables.css";
import css from "../styles/_shared.module.css";
import type { AppProps } from "next/app";
import { combineClasses } from "../utils/utlis";
import localFont from "@next/font/local";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import { createRef } from "react";

const sono = localFont({
    src: [
        { path: "../utils/Sono300.woff2", weight: "300", style: "normal" },
        { path: "../utils/Sono400.woff2", weight: "400", style: "normal" },
        { path: "../utils/Sono500.woff2", weight: "500", style: "normal" },
    ],
    variable: "--font-sono",
});
const montserrat = localFont({
    src: "../utils/Montserrat400.woff2",
    style: "normal",
    weight: "400",
    variable: "--font-montserrat",
});

export default function App({ Component, pageProps }: AppProps) {
    return (
        <div className={combineClasses([css["main-wrapper"], sono.variable, montserrat.variable])}>
            <Navigation />
            <main className={css["main-content"]}>
                <Component {...pageProps} />
            </main>
            <Footer />
        </div>
    );
}

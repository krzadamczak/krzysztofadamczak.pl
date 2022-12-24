import "../styles/globals.css";
import css from "../styles/_shared.module.css";
import type { AppProps } from "next/app";
import { combineClasses } from "../utils/utlis";
import localFont from "@next/font/local";

const sono = localFont({
    src: [
        { path: "../utils/Sono300.woff2", weight: "300", style: "normal" },
        { path: "../utils/Sono400.woff2", weight: "400", style: "normal" },
        { path: "../utils/Sono500.woff2", weight: "500", style: "normal" },
    ],
    variable: "--font-sono",
});

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <main className={combineClasses([sono.variable, css.main])}>
                <Component {...pageProps} />
            </main>
        </>
    );
}

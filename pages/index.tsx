import Head from "next/head";
import { RefObject } from "react";
import About from "./components/About";
import Hero from "./components/Hero";
import Projects from "./components/Projects";

export default function Home() {
    return (
        <>
            <Head>
                <title>Krzysztof Adamczak - Front End Developer</title>
                <meta name='description' content='Portfolio' />
                <meta name='viewport' content='width=device-width, initial-scale=1' />
            </Head>
            <Hero />
            <About />
            <Projects />
        </>
    );
}

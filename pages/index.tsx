import Head from "next/head";
import Hero from "./components/Hero";

export default function Home() {
    return (
        <>
            <Head>
                <title>Krzysztof Adamczak - Front End Developer</title>
                <meta name='description' content='Portfolio' />
                <meta name='viewport' content='width=device-width, initial-scale=1' />
            </Head>
            <Hero />
        </>
    );
}

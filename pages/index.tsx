import Head from "next/head";
import About from "./components/About";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import fs from "fs/promises";
import path from "path";
import { GetStaticProps, InferGetStaticPropsType } from "next";

type Project = {
    title: string;
    description: string;
    liveUrl: string;
    githubUrl: string;
    tags: Array<string>;
    thumbnail: string;
};

export const getStaticProps: GetStaticProps<{ projects: Project[] }> = async () => {
    const pathToFile = path.join(process.cwd(), "json", "data.json");
    console.log(pathToFile);
    const data = await fs.readFile(pathToFile, "utf-8");
    const result = JSON.parse(data);
    return { props: { projects: result } };
};
export default function Home({ projects }: { projects: Project[] }) {
    return (
        <>
            <Head>
                <title>Krzysztof Adamczak - Front End Developer</title>
                <meta name='description' content='Portfolio' />
                <meta name='viewport' content='width=device-width, initial-scale=1' />
            </Head>
            <Hero />
            <About />
            <Projects projects={projects} />
        </>
    );
}

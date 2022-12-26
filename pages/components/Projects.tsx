import { nanoid } from "nanoid";
import css from "../../styles/Projects.module.css";
import Card from "./Card";

type Project = {
    title: string;
    description: string;
    liveUrl: string;
    githubUrl: string;
    thumbnail: string;
    tags: Array<string>;
};

const Projects = ({ projects }: { projects: Project[] }) => {
    return (
        <section className={css.projects} id='projects'>
            <h3 className={css.projects__title}>Projekty</h3>
            <p className={css.projects__description}>
                Poniżej znajduje się kilka projektów nad którymi ostatnio pracowałem.
            </p>
            <div className={css.projects__gallery}>
                {projects.map((project) => (
                    <Card key={nanoid()} {...project} />
                ))}
            </div>
        </section>
    );
};

export default Projects;

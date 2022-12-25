import css from "../../styles/Projects.module.css";
import Card from "./Card";

const Projects = () => {
    return (
        <section className={css.projects} id='projects'>
            <h3 className={css.projects__title}>Projekty</h3>
            <p className={css.projects__description}>
                Poniżej znajduje się kilka projektów nad którymi ostatnio pracowałem.
            </p>
            <div className={css.projects__gallery}>
                <Card />
                <Card />
            </div>
        </section>
    );
};

export default Projects;

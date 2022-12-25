import css from "../../styles/Hero.module.css";
import Button from "./Button";

const Hero = () => {
    return (
        <section className={css.hero}>
            <div className={css.hero__wrapper}>
                <h1 className={css.hero__title}>Krzysztof Adamczakąęśźć</h1>
                <h2 className={css.hero__subtitle}>Front End Developer</h2>
                <Button to='projects'>Zobacz moje portfolio</Button>
            </div>
        </section>
    );
};

export default Hero;

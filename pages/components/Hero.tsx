import css from "../../styles/Hero.module.css";
const Hero = () => {
    return (
        <section className={css.hero}>
            <div className={css.hero__wrapper}>
                <h1 className={css.hero__title}>Krzysztof Adamczakąęśźć</h1>
                <h2 className={css.hero__subtitle}>Front End Developer</h2>
                <a href='#portfolio' className={css.hero__callToAction}>
                    Zobacz moje portfolio
                </a>
            </div>
        </section>
    );
};

export default Hero;

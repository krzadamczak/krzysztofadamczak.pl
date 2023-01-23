import css from "../../styles/About.module.css";
import Image from "next/image";
import { ForwardedRef, forwardRef } from "react";
import Tag from "./Tag";
import { nanoid } from "nanoid";

const About = () => {
    const tags = [
        "Java Script (ES6+)",
        "Type Script",
        "HTML",
        "CSS",
        "React",
        "Next.js",
        "Express.js",
        "Day.js",
        "Figma",
        "Visual Studio Code",
        "Adobe Illustrator",
        "Adobe Photoshop",
        "GitHub",
        "GIT",
    ];
    return (
        <section className={css.about} id='about'>
            <div className={css["about__text-content"]}>
                <h3 className={css.about__title}>O mnie</h3>
                <p className={css.about__me}>
                    Cześć! Mam na imię Krzysztof. Programowanie to moja pasja odkąd tylko pamiętam. Już za szkolnych lat
                    ciągnęło mnie do różnych języków programowania, tworzyłem pierwsze strony, małe programy, krótko
                    mówiąc - wcielałem w życie wszystkie małe zajawki. Ta pasja trwa nieprzerwanie do dziś. Zawsze
                    będzie nowy framework, nowa biblioteka czy nowy język którego będę chciał się nauczyć. Wciąż
                    towarzyszy mi niezmienne zaangażowanie do pracy oraz nieprzerwana chęć doskonalenia się i zdobywania
                    nowych umiejętności. Realizuje na ten moment kilka ciekawych projektów z którymi możesz zapoznać się
                    poniżej. :-)
                </p>
                <div className={css.about__tech}>
                    <h4 className={css["about__subtitle"]}>Technologie z których aktualnie korzystam</h4>
                    <div className={css["about__first-inner"]}>
                        {tags.map((tag) => (
                            <Tag key={nanoid()}>{tag}</Tag>
                        ))}
                    </div>
                </div>
                <div className={css.about__links}>
                    <h5 className={css["about__subtitle"]}>Gdzie mnie znajdziesz</h5>
                    <a className={css.about__link} href='https://github.com/krzadamczak'>
                        <Image src='/github.svg' alt='GitHub logo' width={25} height={25} />
                        GitHub
                    </a>
                </div>
            </div>
            <div className={css["about__wrapper-second"]}>
                <div className={css.about__social}>
                    <p className={css["about__social-text"]}>
                        Odwiedź mojego{" "}
                        <a className='link' href='https://github.com/krzadamczak'>
                            GitHuba
                        </a>
                    </p>
                    <Image src='/github.svg' alt='GitHub logo' width={50} height={50} />
                </div>
            </div>
        </section>
    );
};

export default About;

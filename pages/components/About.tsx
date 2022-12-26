import css from "../../styles/About.module.css";
import Image from "next/image";
import { ForwardedRef, forwardRef } from "react";
import Tag from "./Tag";
import { nanoid } from "nanoid";

const About = () => {
    const tags = [
        "Java Script (ES6+)",
        "Type Script",
        "React",
        "Next.js",
        "Express.js",
        "Day.js",
        "Vite",
        "CSS",
        "HTML",
        "Visual Studio Code",
        "Figma",
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
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci soluta laboriosam debitis quia
                    possimus delectus, minus expedita voluptatibus consequuntur quasi! Possimus a quidem reiciendis
                    neque nostrum soluta ea magni, eligendi repudiandae illum? Corporis dolore, dolor fugit
                    reprehenderit asperiores eaque delectus hic. Quia, itaque. Repudiandae cumque ipsa voluptate id vero
                    delectus asperiores quidem nemo reiciendis ducimus qui adipisci ipsum, sunt, quia error deleniti
                    eaque animi reprehenderit non? Adipisci veritatis magni maxime ex culpa corrupti? Suscipit quae
                    quis, obcaecati quo inventore assumenda, reprehenderit cum placeat autem fugit maxime, tempora
                    consequuntur eaque. Nisi laboriosam itaque architecto autem hic quisquam nostrum ea id tempore.
                </p>
                <div className={css.about__tech}>
                    <h4 className={css["about__tech-stack"]}>Technologie z których aktualnie korzystam.</h4>
                    <div className={css["about__first-inner"]}>
                        {tags.map((tag) => (
                            <Tag key={nanoid()}>{tag}</Tag>
                        ))}
                    </div>
                </div>
            </div>
            <div className={css["about__wrapper-second"]}>
                <div className={css.about__social}>
                    <p>
                        Odwiedź mojego{" "}
                        <a className='link' href='https://github.com/krzadamczak'>
                            GitHuba
                        </a>
                    </p>
                    <Image src='/github.svg' alt='GitHub logo' width={100} height={100} />
                </div>
                <div className={css.about__social}>
                    <p>
                        Zajrzyj na{" "}
                        <a className='link' href='https://github.com/krzadamczak'>
                            CodePen
                        </a>
                    </p>
                    <Image src='/codepen.svg' alt='Codepen logo' width={100} height={100} />
                </div>
            </div>
        </section>
    );
};

export default About;

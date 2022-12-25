import css from "../../styles/About.module.css";
import Image from "next/image";
import { ForwardedRef, forwardRef } from "react";

const About = ({ ref }: { ref: ForwardedRef<HTMLElement> }) => {
    return (
        <section ref={ref} className={css.about} id='about'>
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
                        <div className={css.tag}>Java Script (ES6+)</div>
                        <div className={css.tag}>React</div>
                        <div className={css.tag}>Express.js</div>
                        <div className={css.tag}>Day.js</div>
                        <div className={css.tag}>Vite</div>
                        <div className={css.tag}>CSS</div>
                        <div className={css.tag}>HTML</div>

                        <div className={css.tag}>Visual Studio Code</div>
                        <div className={css.tag}>Figma</div>
                        <div className={css.tag}>Adobe Illustrator</div>
                        <div className={css.tag}>Adobe Photoshop</div>

                        <div className={css.tag}>GitHub</div>
                        <div className={css.tag}>GIT</div>
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

export default forwardRef(About);

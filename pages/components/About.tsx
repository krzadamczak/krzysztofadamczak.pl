import css from "../../styles/About.module.css";

const About = () => {
    return (
        <section className={css.about}>
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
                        Odwiedź mojego &nbsp;
                        <a className='link' href='https://github.com/krzadamczak'>
                            GitHuba
                        </a>
                    </p>
                    <svg
                        className='about__icon about__icon--github'
                        width='100'
                        height='97'
                        viewBox='0 0 100 97'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'>
                        <g clip-path='url(#clip0_2_52)'>
                            <path
                                fill-rule='evenodd'
                                clip-rule='evenodd'
                                d='M50.0001 2.48849e-06C38.1345 0.00976267 26.659 4.21676 17.625 11.869C8.591 19.5213 2.58723 30.12 0.686821 41.7707C-1.21359 53.4214 1.11329 65.3647 7.25147 75.4657C13.3897 85.5668 22.9391 93.1671 34.1928 96.9084C36.679 97.3664 37.5998 95.8398 37.5998 94.5269C37.5998 93.214 37.5998 90.2219 37.5998 86.0696C23.6956 89.1228 20.749 79.3831 20.749 79.3831C19.8306 76.3778 17.8595 73.7996 15.1934 72.1165C10.6508 69.0633 15.531 69.0633 15.531 69.0633C17.1174 69.2833 18.6327 69.8594 19.9622 70.7481C21.2916 71.6368 22.4003 72.8147 23.2044 74.1926C23.8801 75.421 24.7946 76.5034 25.8945 77.377C26.9945 78.2506 28.2582 78.898 29.6119 79.2816C30.9657 79.6651 32.3826 79.7771 33.7802 79.6111C35.1779 79.445 36.5284 79.0043 37.7533 78.3144C37.9583 75.8148 39.0456 73.4679 40.8227 71.689C29.7423 70.4067 18.0479 66.1627 18.0479 47.1108C17.9815 42.1607 19.8272 37.374 23.2044 33.7378C21.6679 29.4507 21.8437 24.7405 23.6956 20.5785C23.6956 20.5785 27.9006 19.2657 37.4464 25.6774C45.6434 23.4387 54.2954 23.4387 62.4924 25.6774C72.0381 19.2657 76.2125 20.5785 76.2125 20.5785C78.0643 24.7405 78.2401 29.4507 76.7035 33.7378C80.0944 37.3655 81.9424 42.1579 81.8601 47.1108C81.8601 66.1932 70.1658 70.4067 59.024 71.5363C60.2058 72.7401 61.1198 74.1777 61.7067 75.7557C62.2937 77.3337 62.5404 79.0169 62.431 80.6959C62.431 87.3519 62.431 92.695 62.431 94.3437C62.431 95.9924 63.3211 97.2137 65.8686 96.7252C77.1249 92.9831 86.676 85.3802 92.8139 75.276C98.9519 65.1717 101.277 53.2251 99.3721 41.5724C97.4677 29.9197 91.4584 19.3208 82.4188 11.671C73.3793 4.0212 61.899 -0.180655 50.0308 -0.183182L50.0001 2.48849e-06Z'
                                fill='#231E1B'
                            />
                        </g>
                        <defs>
                            <clipPath id='clip0_2_52'>
                                <rect width='100' height='97' fill='white' />
                            </clipPath>
                        </defs>
                    </svg>
                </div>
                <div className={css.about__social}>
                    <p>
                        Zajrzyj na&nbsp;
                        <a className='link' href='https://github.com/krzadamczak'>
                            CodePen
                        </a>
                    </p>
                    <svg
                        className='about__icon about__icon--codepen'
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 138 26'
                        fill='none'
                        stroke='#000'
                        stroke-width='2.3'
                        stroke-linecap='round'
                        stroke-linejoin='round'>
                        <path d='M80 6h-9v14h9 M114 6h-9 v14h9 M111 13h-6 M77 13h-6 M122 20V6l11 14V6 M22 16.7L33 24l11-7.3V9.3L33 2L22 9.3V16.7z M44 16.7L33 9.3l-11 7.4 M22 9.3l11 7.3 l11-7.3 M33 2v7.3 M33 16.7V24 M88 14h6c2.2 0 4-1.8 4-4s-1.8-4-4-4h-6v14 M15 8c-1.3-1.3-3-2-5-2c-4 0-7 3-7 7s3 7 7 7 c2 0 3.7-0.8 5-2 M64 13c0 4-3 7-7 7h-5V6h5C61 6 64 9 64 13z' />
                    </svg>
                </div>
            </div>
        </section>
    );
};

export default About;

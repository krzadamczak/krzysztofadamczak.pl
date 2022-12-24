import css from "./../../styles/Navigation.module.css";

const Navigation = () => {
    return (
        <nav className={css.nav}>
            <a className={css.nav__link} href='#omnie'>
                O mnie
            </a>
            <a className={css.nav__link} href='#Projekty'>
                Projekty
            </a>
            <a className={css.nav__link} href='#Kontakt'>
                Kontakt
            </a>
        </nav>
    );
};

export default Navigation;

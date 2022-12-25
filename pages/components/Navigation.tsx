import { combineClasses } from "../../utils/utlis";
import css from "./../../styles/Navigation.module.css";

const Navigation = ({ type }: { type?: string }) => {
    return (
        <nav className={combineClasses([css.nav, type ? css["nav--small"] : ""])}>
            <a className={combineClasses([css.nav__link, type ? css["nav__link--small"] : ""])} href='#omnie'>
                O mnie
            </a>
            <a className={combineClasses([css.nav__link, type ? css["nav__link--small"] : ""])} href='#Projekty'>
                Projekty
            </a>
            <a className={combineClasses([css.nav__link, type ? css["nav__link--small"] : ""])} href='#Kontakt'>
                Kontakt
            </a>
        </nav>
    );
};

export default Navigation;

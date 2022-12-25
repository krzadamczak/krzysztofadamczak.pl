import { combineClasses } from "../../utils/utlis";
import css from "./../../styles/Navigation.module.css";

const Navigation = ({ type }: { type?: string }) => {
    const handleScroll = (to: string) => () => {
        //TODO: I'm not sure how to do this with refs and typescript, temporary solution.
        const element = document.getElementById(to);
        element?.scrollIntoView({ behavior: "smooth" });
    };
    return (
        <nav className={combineClasses([css.nav, type ? css["nav--small"] : ""])}>
            <ul className={css["nav__wrapper"]}>
                <li
                    onClick={handleScroll("about")}
                    className={combineClasses([css.nav__link, type ? css["nav__link--small"] : ""])}>
                    O mnie
                </li>
                <li
                    onClick={handleScroll("projects")}
                    className={combineClasses([css.nav__link, type ? css["nav__link--small"] : ""])}>
                    Projekty
                </li>
                <li
                    onClick={handleScroll("about")}
                    className={combineClasses([css.nav__link, type ? css["nav__link--small"] : ""])}>
                    Kontakt
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;

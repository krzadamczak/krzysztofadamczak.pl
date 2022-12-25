import Navigation from "./Navigation";
import css from "../../styles/Footer.module.css";

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer className='footer'>
            Krzysztof Adamczak © 2013 - {currentYear}
            <Navigation type='small' />
        </footer>
    );
};

export default Footer;

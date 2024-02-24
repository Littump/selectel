import { memo } from "react";
import styles from "./Footer.module.scss";
import logo from "assets/icons/logo.svg";

const Footer = memo(() => {
    return (
        <div className={styles.footer}>
            <h4>по всем вопросам звонить:</h4>
            <a href="">89001112244</a>
        </div>
    );
});

export default Footer;

import React from "react";
import s from "./Header.module.css";

const Header = () => {
    return (
        <header className={s.header}>
            <img src="http://toplogos.ru/images/logo-gallery.png"
                 alt="logo"/>
        </header>
    );
}

export default Header;

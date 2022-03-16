import React from "react";
import style from "./Navbar.module.css";
import {NavLink} from "react-router-dom";
import FriendsItem from "../Friends/FriendsItem/FriendsItem";

const Navbar = (props) => {

    let friendsNameElements = props.friendsName.map(element => <FriendsItem name={element.name} id={element.id}/>);

    return (
        <nav className={style.nav}>
            <div className={style.item}>
                <NavLink to="/profile">Profile</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to="/dialogs">Messages</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to="/news">News</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to="/music">Music</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to="/settings">Settings</NavLink>
            </div>
            <div className={style.item}>
                <div className={style.friendsBar}>
                    <NavLink to="/friends">Friends</NavLink>
                    <div className={style.friends}>
                        {friendsNameElements}
                    </div>
                </div>
            </div>
        </nav>
    );

};

export default Navbar;

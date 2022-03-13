import React from "react";
import style from "./Friends.module.css";
import FriendsItem from "./FriendsItem/FriendsItem";

const Friends = () => {
    return (
        <div className={style.friends}>
            <h3>Friends</h3>
            <FriendsItem/>
        </div>
    );
};

export default Friends;

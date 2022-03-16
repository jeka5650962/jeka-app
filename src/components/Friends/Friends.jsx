import React from "react";
import style from "./Friends.module.css";
import FriendsItem from "./FriendsItem/FriendsItem";

const Friends = (props) => {

    let friendsNameElements = props.friendsName.map(element => <FriendsItem name={element.name} id={element.id}/>);

    return (
        <div className={style.container}>
            <h3>Friends</h3>
            <div className={style.friends}>
                {friendsNameElements}
            </div>
        </div>
    );
};

export default Friends;

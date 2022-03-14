import React from "react";
import style from "./Friends.module.css";
import FriendsItem from "./FriendsItem/FriendsItem";

const Friends = () => {

    let friendsName = [
        {id: 0, name: 'Dima',},
        {id: 1, name: 'Lena',},
        {id: 2, name: 'Andrey',},
    ];

    let friendsNameElements = friendsName.map(f => <FriendsItem name={f.name} id={f.id}/>);

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

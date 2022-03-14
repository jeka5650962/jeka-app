import React from "react";
import style from "./../Friends.module.css";
import {NavLink} from "react-router-dom";

const FriendsItem = (props) => {
    let path = `/friends/${props.name}`;
    return (
        <div className={style.container}>
            <div className={style.friendItem}>
                <NavLink to={path}>
                    <img
                        src="http://sun9-82.userapi.com/sun9-49/s/v1/if1/nd7D6EOnJpznYpfYijdm1Fn884TNbD0HjItMJjX-izZYy5nue-qvZE-TMKX_z4Gq_-L_q--e.jpg?size=256x256&quality=96&crop=0,0,256,256&ava=1"
                        alt="ava"/>
                    <div className={style.friendsName}>
                        {props.name}
                    </div>
                </NavLink>
            </div>
        </div>
    );
};

export default FriendsItem;

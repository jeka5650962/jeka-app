import React from "react";
import style from "./../Dialogs.module.css";
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = `/dialogs/${props.id}`;
    return (
        <div className={style.dialog}>
            <NavLink to={path}>
                <img
                    src="http://sun9-82.userapi.com/sun9-49/s/v1/if1/nd7D6EOnJpznYpfYijdm1Fn884TNbD0HjItMJjX-izZYy5nue-qvZE-TMKX_z4Gq_-L_q--e.jpg?size=256x256&quality=96&crop=0,0,256,256&ava=1"
                    alt="ava"/>
                {props.name}
            </NavLink>
        </div>
    );
};

export default DialogItem;

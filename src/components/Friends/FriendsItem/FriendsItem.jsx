import React from "react";
import style from "./../Friends.module.css";

const FriendsItem = () => {
    return (
        <div className={style.container}>
            <div className={style.friendItem}>
                <img
                    src="http://sun9-82.userapi.com/sun9-49/s/v1/if1/nd7D6EOnJpznYpfYijdm1Fn884TNbD0HjItMJjX-izZYy5nue-qvZE-TMKX_z4Gq_-L_q--e.jpg?size=256x256&quality=96&crop=0,0,256,256&ava=1"
                    alt="ava"/>
                <div>Dima</div>
            </div>
            <div className={style.friendItem}>
                <img
                    src="http://sun9-82.userapi.com/sun9-49/s/v1/if1/nd7D6EOnJpznYpfYijdm1Fn884TNbD0HjItMJjX-izZYy5nue-qvZE-TMKX_z4Gq_-L_q--e.jpg?size=256x256&quality=96&crop=0,0,256,256&ava=1"
                    alt="ava"/>
                <div>Sveta</div>
            </div>
            <div className={style.friendItem}>
                <img
                    src="http://sun9-82.userapi.com/sun9-49/s/v1/if1/nd7D6EOnJpznYpfYijdm1Fn884TNbD0HjItMJjX-izZYy5nue-qvZE-TMKX_z4Gq_-L_q--e.jpg?size=256x256&quality=96&crop=0,0,256,256&ava=1"
                    alt="ava"/>
                <div>Andrey</div>
            </div>
        </div>
    );
};

export default FriendsItem;
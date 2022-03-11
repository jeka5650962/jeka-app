import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {

    // Эти данные нужно вынести в index.js:

    // let posts = [
    //     {id: 0, message: "Hi, how are you?", likesCount: 13},
    //     {id: 1, message: "It's my first project", likesCount: 26},
    //     {id: 2, message: "Bla bla", likesCount: 6},
    //     {id: 3, message: "Yo", likesCount: 11},
    // ];

    return (
        <div>
            <ProfileInfo/>
            {/* Компоненте MyPosts нужны данные. Отдадим эти посты, взятые из props: */}
            <MyPosts posts={props.posts}/>
        </div>
    );
}

export default Profile;

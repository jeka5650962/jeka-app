import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPosts from "./MyPosts/MyPosts";

const Profile = (props) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts
                posts={props.profilePage.posts}
                newPostText={props.profilePage.newPostText}
                addPost={props.addPost}
                updateNewPostText={props.updateNewPostText}
            />
        </div>
    );
}

export default Profile;

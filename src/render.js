import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost, updateNewPostText} from './redux/state';

export let rerenderEntireTree = (state) => {

    ReactDOM.render(
        <React.StrictMode>
            <App
                profilePage={state.profilePage}
                dialogsPage={state.dialogsPage}
                friendsName={state.sidebar.friendsName}
                addPost={addPost}
                updateNewPostText={updateNewPostText}
            />
        </React.StrictMode>,
        document.getElementById('root')
    );

};

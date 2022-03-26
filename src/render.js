import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addMessage, addPost, updateNewMessageText, updateNewPostText} from './redux/state';

export let rerenderEntireTree = (state) => {

    ReactDOM.render(
        <React.StrictMode>
            <App
                profilePage={state.profilePage}
                dialogsPage={state.dialogsPage}
                friendsName={state.sidebar.friendsName}
                addPost={addPost}
                updateNewPostText={updateNewPostText}
                addMessage={addMessage}
                updateNewMessageText={updateNewMessageText}
            />
        </React.StrictMode>,
        document.getElementById('root')
    );

};

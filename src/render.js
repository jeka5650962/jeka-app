import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost} from './redux/state';

export let rerenderEntireTree = (state) => {

    ReactDOM.render(
        <React.StrictMode>
            <App
                posts={state.profilePage.posts}
                dialogs={state.dialogsPage.dialogs}
                messages={state.dialogsPage.messages}
                friendsName={state.sidebar.friendsName}
                addPost={addPost}
            />
        </React.StrictMode>,
        document.getElementById('root')
    );

};

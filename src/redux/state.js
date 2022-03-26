import {rerenderEntireTree} from "../render";

let state = {

    profilePage: {
        posts: [
            {id: 0, message: "Hi, how are you?", likesCount: 13},
            {id: 1, message: "It's my first project", likesCount: 26},
            {id: 2, message: "Bla bla", likesCount: 6},
        ],
        newPostText: 'Уроки React JS - Вынос мозга!!!',
    },

    dialogsPage: {
        dialogs: [
            {id: 1, name: 'Dima',},
            {id: 2, name: 'Andrey',},
            {id: 3, name: 'Lena',},
            {id: 4, name: 'Sasha',},
            {id: 5, name: 'Viktor',},
            {id: 6, name: 'Valera',},
        ],
        messages: [
            {id: 1, message: "Hi, how are you?",},
            {id: 2, message: "What is your name?",},
            {id: 3, message: "I was born in Belarus",},
            {id: 4, message: "Hello, World!",},
            {id: 5, message: "Talk to me please!",},
        ],
        newMessageText: 'Привет, дружище! Как твои дела?',
    },

    sidebar: {
        friendsName: [
            {id: 0, name: 'Dima',},
            {id: 1, name: 'Lena',},
            {id: 2, name: 'Andrey',},
        ],
    },

};

/* ------------------------- Посты ------------------------- */

export let addPost = () => {
    let newPost = {
        id: 3,
        message: state.profilePage.newPostText,
        likesCount: 0,
    };
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
};

export let updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
};

/* ------------------------- Сообщения ------------------------- */

export let addMessage = () => {
    let newMessage = {
        id: 6,
        message: state.dialogsPage.newMessageText,
    };
    state.dialogsPage.messages.push(newMessage);
    state.dialogsPage.newMessageText = '';
    rerenderEntireTree(state);
};

export let updateNewMessageText = (newText) => {
    state.dialogsPage.newMessageText = newText;
    rerenderEntireTree(state);
};

export default state;

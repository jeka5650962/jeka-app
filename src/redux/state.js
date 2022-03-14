let state = {

    profilePage: {
        posts: [
            {id: 0, message: "Hi, how are you?", likesCount: 13},
            {id: 1, message: "It's my first project", likesCount: 26},
            {id: 2, message: "Bla bla", likesCount: 6},
        ],
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
    },

    sidebar: {
        friendsName: [
            {id: 0, name: 'Dima',},
            {id: 1, name: 'Lena',},
            {id: 2, name: 'Andrey',},
        ],
    },

};

export default state;

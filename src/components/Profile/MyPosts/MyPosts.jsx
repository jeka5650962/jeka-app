import React from "react";
import style from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {

    // Эти данные нужно вынести в index.js:

    // let posts = [
    //     {id: 0, message: "Hi, how are you?", likesCount: 13},
    //     {id: 1, message: "It's my first project", likesCount: 26},
    //     {id: 2, message: "Bla bla", likesCount: 6},
    //     {id: 3, message: "Yo", likesCount: 11},
    // ];

    // Из массива объектов получаем массив jsx-элементов. Итерируемся по props - дайте нам в props!:

    let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} id={p.id}/>);

    /* Мапим и передаем внутрь map стрелочную функцию. Эта стрелочная функция вызывается столько раз, сколько
    элементов в массиве. И каждый раз функция map засунет в эту функцию конкретный элемент исходного массива.
    И назовем его p. Приходит элемент p (это каждый объект из массива posts) и возвращаем jsx-элемент,
    где в props в качестве message, likesCount и id передаются {p.message}, {p.likesCount} и {p.id} соответственно. */

    return (
        <div className={style.postsBlock}>
            <h3>My Posts</h3>
            <div>
                <div>
                    <textarea>Some text</textarea>
                </div>
                <button>Add post</button>
            </div>
            <div className={style.posts}>
                {postsElements}
            </div>
        </div>
    );
};

export default MyPosts;

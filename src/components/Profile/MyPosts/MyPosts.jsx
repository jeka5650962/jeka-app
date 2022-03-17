import React from "react";
import style from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {

    // ↓ Из массива объектов получаем массив jsx-элементов. Итерируемся по props - дайте нам в props!:

    let postsElements = props.posts.map(element => <Post message={element.message}
                                                         likesCount={element.likesCount}
                                                         id={element.id}/>);

    /* ↑ Мапим и передаем внутрь map стрелочную функцию. Эта стрелочная функция вызывается столько раз, сколько
    элементов в массиве. И каждый раз функция map засунет в эту функцию конкретный элемент исходного массива.
    И назовем его p. Приходит элемент p (это каждый объект из массива posts) и возвращаем jsx-элемент,
    где в props в качестве message, likesCount и id передаются {p.message}, {p.likesCount} и {p.id} соответственно. */

    let newPostElement = React.createRef(); /* Означает "создай ссылку" */

    let addPost = () => {
        let text = newPostElement.current.value;
        alert(text);
    };

    /* ↑ Мы говорим: "Эй ссылка, ты являешься объектом, у тебя есть свойство current (current ссылается на нативный html
    элемент)". И у этого html элемента берем value */

    return (

        <div className={style.postsBlock}>
            <h3>My Posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElement}>Some text</textarea> {/* Привязываем ссылку к textarea */}
                </div>
                <button onClick={addPost}>Add post</button>
            </div>
            <div className={style.posts}>
                {postsElements}
            </div>
        </div>

    );
};

export default MyPosts;

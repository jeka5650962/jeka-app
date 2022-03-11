import React from "react";
import style from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

    // let dialogs = [
    //     {id: 1, name: 'Dima',},
    //     {id: 2, name: 'Andrey',},
    //     {id: 3, name: 'Lena',},
    //     {id: 4, name: 'Sasha',},
    //     {id: 5, name: 'Viktor',},
    //     {id: 6, name: 'Valera',},
    // ];
    //
    // let messages = [
    //     {id: 1, message: "Hi, how are you?",},
    //     {id: 2, message: "What is your name?",},
    //     {id: 3, message: "I was born in Belarus",},
    //     {id: 4, message: "Hello, World!",},
    //     {id: 5, message: "Talk to me please!",},
    // ];

    // Из массивов объектов получаем массивы jsx-элементов:

    let dialogsElements = props.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messagesElements = props.messages.map(m => <Message message={m.message} id={m.id}/>);

    /* Мапим и передаем внутрь map стрелочную функцию. Эта стрелочная функция вызывается столько раз, сколько
    элементов в массиве. И каждый раз функция map засунет в эту функцию конкретный элемент исходного массива.
    И назовем его d. Приходит элемент d (это каждый объект из массива dialogs) и возвращаем jsx-элемент,
    где в props в качестве name и id передаются {d.name} и {d.id} соответственно. */

    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={style.messages}>
                {messagesElements}
            </div>
        </div>
    );
};

export default Dialogs;

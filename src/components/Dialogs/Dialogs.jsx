import React from "react";
import style from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

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

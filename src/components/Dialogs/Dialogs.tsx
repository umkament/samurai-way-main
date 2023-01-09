import React from 'react';
import s from './Dialogs.module.css'
import {Message} from "./Message/Message";
import {DialogItem} from "./DialogsItem/DialogsItem";
import {DialogsType, MessagesType} from "../../redux/state";



type DialogsPropsType = {
  dialogs: Array<DialogsType>
  messages: Array<MessagesType>
}

const Dialogs = (props: DialogsPropsType) => {

  let dialogsElements = props.dialogs.map( d => <DialogItem name={d.name} id={d.id} />)

  let messagesElements = props.messages.map(m =>  <Message message={m.message}/>)


  let newElement= React.createRef<HTMLTextAreaElement>();
  let addMass = ()=> {
    let text =  newElement.current?.value
    alert(text)
  }

  return (
     <div className={s.dialogs}>
       <div className={s.dialogsItem}>
         {dialogsElements}
       </div>
       <div className={s.messages}>
         {messagesElements}
       </div>
       <div>
         <textarea ref={newElement}></textarea>
         <button onClick={addMass}> send</button>
       </div>
     </div>
  );
};

export default Dialogs;
import React from 'react';
import s from './Dialogs.module.css'
import {Message} from "./Message/Message";
import {DialogItem} from "./DialogsItem/DialogsItem";
import {DialogsType, messagesPageType, MessagesType} from "../../redux/state";



type DialogsPropsType = {
  messagesPage: messagesPageType

}

const Dialogs = (props: DialogsPropsType) => {

  let dialogsElements = props.messagesPage.dialogs.map( d => <DialogItem name={d.name} id={d.id} />)

  let messagesElements = props.messagesPage.messages.map(m =>  <Message message={m.message}/>)


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
         <textarea ref={newElement}/>
         <button onClick={addMass}> send</button>
       </div>
     </div>
  );
};

export default Dialogs;
import React from 'react';
import s from './Dialogs.module.css'
import {Message} from "./Message/Message";
import {DialogItem} from "./DialogsItem/DialogsItem";
import { StoreType} from "../../redux/store";


type DialogsPropsType = {
  //messagesPage: messagesPageType
  store: StoreType
}

const Dialogs: React.FC<DialogsPropsType> = (props) => {

  let state = props.store.getState()
  let dialogsElements = state.messagesPage.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)

  let messagesElements = state.messagesPage.messages.map(m => <Message message={m.message}/>)


  let newElement = React.createRef<HTMLTextAreaElement>();
  let addMass = () => {
    let text = newElement.current?.value
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
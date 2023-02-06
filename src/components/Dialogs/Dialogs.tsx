import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css'
import {Message} from "./Message/Message";
import {DialogItem} from "./DialogsItem/DialogsItem";
import {sendMessageAC, StoreType, updateMessageBodyAC} from "../../redux/store";


type DialogsPropsType = {
  //messagesPage: messagesPageType
  store: StoreType
}

const Dialogs: React.FC<DialogsPropsType> = (props) => {

  let state = props.store.getState()
  let dialogsElements = state.messagesPage.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)

  let messagesElements = state.messagesPage.messages.map(m => <Message message={m.message}/>)
  let newMessageBody = state.messagesPage.newMessageBody

  let addMessChange = (e: ChangeEvent<HTMLTextAreaElement>)=> {
    let textOfMessage = e.currentTarget.value
    props.store.dispatch(updateMessageBodyAC(textOfMessage))
  }

  let addMessClick = () => {
    props.store.dispatch(sendMessageAC())
  }

  return (
     <div className={s.dialogs}>
       <div className={s.dialogsItem}>
         {dialogsElements}
       </div>
       <div className={s.messages}>
         <div>{messagesElements}</div>
       </div>
       <div>
         <div><textarea placeholder='enter your message'
                        value={newMessageBody}
                        onChange={addMessChange}
         ></textarea></div>
         <div><button onClick={addMessClick}>send</button></div>
       </div>
     </div>
  );
};

export default Dialogs;
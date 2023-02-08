import React from 'react';
import {sendMessageAC, updateMessageBodyAC} from "../../redux/messagePage-reducer";
import {store} from "../../redux/redux-store";
import {Dialogs} from "./Dialogs";


export const DialogsContainer= () => {

  let addMessChange = (textOfMessage: string)=> {
    store.dispatch(updateMessageBodyAC(textOfMessage))
  }

  let addMessClick = () => {
    store.dispatch(sendMessageAC())
  }

  return <Dialogs updateMessageBody={addMessChange}
                  sendMessage={addMessClick}
                  messagesPage={store.getState().messagesPage}
  />
};

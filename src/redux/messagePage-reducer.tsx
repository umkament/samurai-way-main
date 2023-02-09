import {ActionType} from "./store";

export type DialogsType = {
  id: number,
  name: string
}
export type MessagesType = {
  id: number,
  message: string
}
export type messagesPageType = {
  dialogs: Array<DialogsType>
  messages: Array<MessagesType>
  newMessageBody: string
}


let initialState: messagesPageType = {
  dialogs: [
    {id: 1, name: 'Dima'},
    {id: 2, name: 'Viktor'},
    {id: 3, name: 'Petia'},
    {id: 4, name: 'Valera'},
    {id: 5, name: 'Andrey'},
    {id: 6, name: 'Chris'},
  ],
  messages: [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'How are you?'},
    {id: 3, message: 'Fine'},
    {id: 4, message: 'Yo'},
    {id: 5, message: 'Hello World'}
  ],
  newMessageBody: ''
}

export const messagesReducer = (state: messagesPageType = initialState, action: ActionType): messagesPageType => {
switch (action.type) {
  case 'UPDATE-MESSAGE-BODY':
    state.newMessageBody = action.textOfMessage
    return state
  case 'SEND-MESSAGE':
    let textOfMessage = state.newMessageBody
    state.newMessageBody = ''
    state.messages.push({id: 6, message: textOfMessage})
    return state
  default:
    return state
}
}

export const updateMessageBodyAC = (textOfMessage: string) =>
   ({type: "UPDATE-MESSAGE-BODY", textOfMessage: textOfMessage} as const)

export const sendMessageAC = () => ({type: "SEND-MESSAGE"} as const)
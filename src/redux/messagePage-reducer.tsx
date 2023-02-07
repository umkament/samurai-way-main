import {ActionType, messagesPageType} from "./store";

export const messagesReducer = (state: messagesPageType, action: ActionType): messagesPageType => {
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
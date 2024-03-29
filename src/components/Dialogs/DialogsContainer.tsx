import React from 'react';
import {InitialStateMessageType, sendMessageAC, updateMessageBodyAC} from "../../redux/messagePage-reducer";
import {AppRootStateType} from "../../redux/redux-store";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {Dispatch} from "redux";

type MapStatePropsType = {
  messagesPage: InitialStateMessageType
}

type MapDispatchPropsType = {
  updateMessageBody: (textOfMessage: string)=> void,
  sendMessage: ()=>void
}
export type DialogsPropsType = MapStatePropsType & MapDispatchPropsType

let mapStateToProps = (state: AppRootStateType): MapStatePropsType => {
  return {
    messagesPage: state.messagesPage
  }
}
let mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
  return {
    updateMessageBody: (textOfMessage: string) => {
      dispatch(updateMessageBodyAC(textOfMessage))
    },
    sendMessage: ()=> {
      dispatch(sendMessageAC())
    }
  }
}


export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);







import {combineReducers, createStore} from "redux";
import {messagesReducer, sendMessageAC, updateMessageBodyAC} from "./messagePage-reducer";
import {addPostAC, profileReducer, updateTextPostAC} from "./profilePage-reducer";


export type DialogsType = {
  id: number,
  name: string
}
export type MessagesType = {
  id: number,
  message: string
}
export type PostsType = {
  id: number
  message: string
  likesCount: number
}

export type messagesPageType = {
  dialogs: Array<DialogsType>
  messages: Array<MessagesType>
  newMessageBody: string
}
export type profilePageType = {
  posts: Array<PostsType>
  newPostText: string
}

export type StateType = {
  messagesPage: messagesPageType
  profilePage: profilePageType
}


let reducers = combineReducers({
  messagesPage: messagesReducer,
  profilePage: profileReducer
})


export let store = createStore(reducers);

export type AppRootState = ReturnType<typeof reducers>

// @ts-ignore
window.store = store;


export type ActionType = ReturnType<typeof addPostAC> |
   ReturnType<typeof updateTextPostAC> |
   ReturnType<typeof updateMessageBodyAC> |
   ReturnType<typeof sendMessageAC>

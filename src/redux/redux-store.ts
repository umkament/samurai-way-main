import {combineReducers, createStore} from "redux";
import {messagesPageType, messagesReducer, sendMessageAC, updateMessageBodyAC} from "./messagePage-reducer";
import {addPostAC, profileReducer, updateTextPostAC} from "./profilePage-reducer";




export type PostsType = {
  id: number
  message: string
  likesCount: number
}


export type profilePageType = {
  posts: Array<PostsType>
  newPostText: string
}

export type StateType = {
  messagesPage: messagesPageType
  profilePage: profilePageType
}


let rootReducer = combineReducers({
  messagesPage: messagesReducer,
  profilePage: profileReducer
})


export let store = createStore(rootReducer);

export type AppRootStateType = ReturnType<typeof rootReducer>

// @ts-ignore
window.store = store;


export type ActionType = ReturnType<typeof addPostAC> |
   ReturnType<typeof updateTextPostAC> |
   ReturnType<typeof updateMessageBodyAC> |
   ReturnType<typeof sendMessageAC>

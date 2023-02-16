import {combineReducers, createStore} from "redux";
import {DialogsType, messagesReducer, MessagesType, sendMessageAC, updateMessageBodyAC} from "./messagePage-reducer";
import {addPostAC, profileReducer, updateTextPostAC} from "./profilePage-reducer";
import {
  followAC,
  setCurrentPageAC,
  setTotalUsersCountAC,
  setUsersAC,
  toggleIsFetchingAC,
  unfollowAC,
  usersReducer
} from "./users-reducer";

export type PostsType = {
  id: number
  message: string
  likesCount: number
}
export type profilePageType = {
  posts: Array<PostsType>
  newPostText: string
}

export type messagesPageType = {
  dialogs: Array<DialogsType>
  messages: Array<MessagesType>
  newMessageBody: string
}



let rootReducer = combineReducers({
  messagesPage: messagesReducer,
  profilePage: profileReducer,
  users: usersReducer
})


export let store = createStore(rootReducer);

export type AppRootStateType = ReturnType<typeof rootReducer>

// @ts-ignore
window.store = store;


export type ActionType = ReturnType<typeof addPostAC> |
   ReturnType<typeof updateTextPostAC> |
   ReturnType<typeof updateMessageBodyAC> |
   ReturnType<typeof sendMessageAC> |
   ReturnType<typeof followAC> |
   ReturnType<typeof unfollowAC> |
   ReturnType<typeof setUsersAC> |
   ReturnType<typeof setCurrentPageAC> |
   ReturnType<typeof setTotalUsersCountAC>|
   ReturnType<typeof toggleIsFetchingAC>




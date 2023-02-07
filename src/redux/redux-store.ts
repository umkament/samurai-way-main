import {combineReducers, createStore} from "redux";
import {messagesReducer} from "./messagePage-reducer";
import {profileReducer} from "./profilePage-reducer";

let reducers = combineReducers({
  messagesPage: messagesReducer,
  profilePage: profileReducer
})

export let store = createStore(reducers);

// @ts-ignore
window.store = store;
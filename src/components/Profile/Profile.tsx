import React from 'react';
import ProfileInfo from "./ProfileInfo";
import MyPosts from "./MyPosts/MyPosts";
import {store} from "../../redux/redux-store";
/*
type ProfilePropsType = {
 // profilePage: profilePageType
  //addPost: () => void
  //updateTextPost: (textOfPost: string) => void
  store: StoreType
}*/
const Profile = () => {
let state = store.getState()
  return (
     <div>
       <ProfileInfo/>
       <MyPosts posts={state.profilePage.posts}
                newPostText={state.profilePage.newPostText}
                dispatch={store.dispatch.bind(store)}
                //addPost={props.store.addPost.bind(props.store)}
                //updateTextPost={props.store.updateTextPost.bind(props.store)}



       />
       <MyPosts posts={state.profilePage.posts}
                newPostText={state.profilePage.newPostText}
                dispatch={store.dispatch.bind(store)}
       />
     </div>
  )
}

export default Profile;


import React from 'react';
import ProfileInfo from "./ProfileInfo";
import {StoreType} from "../../redux/store";
import MyPosts from "./MyPosts/MyPosts";

type ProfilePropsType = {
 // profilePage: profilePageType
  //addPost: () => void
  //updateTextPost: (textOfPost: string) => void
  store: StoreType
}
const Profile: React.FC<ProfilePropsType> = (props) => {
let state = props.store.getState()
  return (
     <div>
       <ProfileInfo/>
       <MyPosts posts={state.profilePage.posts}
                newPostText={state.profilePage.newPostText}
                dispatch={props.store.dispatch.bind(props.store)}
                //addPost={props.store.addPost.bind(props.store)}
                //updateTextPost={props.store.updateTextPost.bind(props.store)}



       />
       <MyPosts posts={state.profilePage.posts}
                newPostText={state.profilePage.newPostText}
                dispatch={props.store.dispatch.bind(props.store)}
       />
     </div>
  )
}

export default Profile;


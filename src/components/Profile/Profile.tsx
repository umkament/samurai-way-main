import React from 'react';
import ProfileInfo from "./ProfileInfo";
import {addPost, PostsType, profilePageType} from "../../redux/state";
import MyPosts from "./MyPosts/MyPosts";

type ProfilePropsType = {
  profilePage: profilePageType
  addPost: (postMessage: string)=> void
  //newPostText: string
}
const Profile = (props: ProfilePropsType) => {

  return (
     <div>
       <ProfileInfo/>
       <MyPosts posts={props.profilePage.posts}
                addPost={addPost}
                newPostText={props.profilePage.newPostText}

       />
       <MyPosts posts={props.profilePage.posts}
                newPostText={props.profilePage.newPostText}
                addPost={addPost}
       />
     </div>
  )
}

export default Profile;


import React from 'react';
import ProfileInfo from "./ProfileInfo";
import {profilePageType} from "../../redux/state";
import MyPosts from "./MyPosts/MyPosts";

type ProfilePropsType = {
  profilePage: profilePageType
  addPost: () => void
  updateTextPost: (textOfPost: string) => void
}
const Profile = (props: ProfilePropsType) => {

  return (
     <div>
       <ProfileInfo/>
       <MyPosts posts={props.profilePage.posts}
                addPost={props.addPost}
                updateTextPost={props.updateTextPost}
                newPostText={props.profilePage.newPostText}


       />
       <MyPosts posts={props.profilePage.posts}
                newPostText={props.profilePage.newPostText}
                updateTextPost={props.updateTextPost}
                addPost={props.addPost}
       />
     </div>
  )
}

export default Profile;


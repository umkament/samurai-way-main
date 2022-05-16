import React from 'react';
import s from './Profile.module.css'
import Post from "./MyPosts/Post/Post";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo";

const Profile = () => {
  return (
     <div>
       <ProfileInfo/>
       <MyPosts/>
       <MyPosts/>
     </div>
  )
}

export default Profile;


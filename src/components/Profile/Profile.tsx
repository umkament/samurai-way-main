import React from 'react';
import ProfileInfo from "./ProfileInfo";
import {PostsType} from "../../redux/state";
import MyPosts from "./MyPosts/MyPosts";

type ProfilePropsType = {
  posts: Array<PostsType>
}
const Profile = (props: ProfilePropsType) => {

  return (
     <div>
       <ProfileInfo/>
       <MyPosts posts={props.posts}/>
       <MyPosts posts={props.posts}/>
     </div>
  )
}

export default Profile;


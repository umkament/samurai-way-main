import React from 'react';
import ProfileInfo from "./ProfileInfo";
import {addPost, PostsType} from "../../redux/state";
import MyPosts from "./MyPosts/MyPosts";

type ProfilePropsType = {
  posts: Array<PostsType>
  addPost: (postMessage: string)=> void
}
const Profile = (props: ProfilePropsType) => {

  return (
     <div>
       <ProfileInfo/>
       <MyPosts posts={props.posts}
                addPost={addPost}
       />
       <MyPosts posts={props.posts}
                addPost={addPost}
       />
     </div>
  )
}

export default Profile;


import React from 'react';
import ProfileInfo from "./ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";


const Profile = () => {

  return (
     <div>
       <ProfileInfo/>

       <MyPostsContainer/>
       <MyPostsContainer/>
     </div>
  )
}

export default Profile;


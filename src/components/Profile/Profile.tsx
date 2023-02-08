import React from 'react';
import ProfileInfo from "./ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
/*
type ProfilePropsType = {
 // profilePage: profilePageType
  //addPost: () => void
  //updateTextPost: (textOfPost: string) => void
  store: StoreType
}*/
const Profile = () => {

  return (
     <div>
       <ProfileInfo/>
       <MyPostsContainer //posts={state.profilePage.posts}
                //newPostText={state.profilePage.newPostText}
               // dispatch={store.dispatch.bind(store)}
                //addPost={props.store.addPost.bind(props.store)}
                //updateTextPost={props.store.updateTextPost.bind(props.store)}

       />
       <MyPostsContainer/>
     </div>
  )
}

export default Profile;


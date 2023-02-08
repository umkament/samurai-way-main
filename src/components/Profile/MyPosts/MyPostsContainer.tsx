import React from 'react';

import {addPostAC, updateTextPostAC} from "../../../redux/profilePage-reducer";
import MyPosts from "./MyPosts";
import {store} from "../../../redux/redux-store";



const MyPostsContainer = () => {

  let addPost = () => {
    store.dispatch(addPostAC())
  }

  let onPostChange = (textOfPost: string ) => {
      store.dispatch(updateTextPostAC(textOfPost))
    }

  return <MyPosts updateTextPost={onPostChange}
                  addPost={addPost}
                  posts={store.getState().profilePage.posts}
                  newPostText={store.getState().profilePage.newPostText}
  />
}

export default MyPostsContainer;


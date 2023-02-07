import {ActionType, PostsType, profilePageType} from "./store";

let initialState = {
    posts: [
      {id: 1, message: 'Hi, how are you?', likesCount: 0},
      {id: 2, message: 'It\'s my first post', likesCount: 16},
    ],
    newPostText: "it-kamasutra.com"
}

export const profileReducer = (state: profilePageType = initialState, action: ActionType): profilePageType=> {
switch (action.type) {
  case 'ADD-POST':
    let newPost: PostsType = {
      id: 3,
      message: state.newPostText,
      likesCount: 0
    }
    state.posts.push(newPost)
    state.newPostText = ''
    return state
  case 'UPDATE-TEXT-POST':
    state.newPostText = action.textOfPost
    return state
  default:
    return state
}
}

export const addPostAC = () => ({type: 'ADD-POST'} as const)

export const updateTextPostAC = (textOfPost: string) =>
   ({type: "UPDATE-TEXT-POST", textOfPost: textOfPost} as const)
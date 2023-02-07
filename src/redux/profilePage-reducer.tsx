import {ActionType, PostsType, profilePageType} from "./store";

export const profileReducer = (state: profilePageType, action: ActionType): profilePageType=> {
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
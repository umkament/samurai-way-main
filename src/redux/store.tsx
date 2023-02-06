

export let store: StoreType = {
  _state: {
    messagesPage: {
      dialogs: [
        {id: 1, name: 'Dima'},
        {id: 2, name: 'Viktor'},
        {id: 3, name: 'Petia'},
        {id: 4, name: 'Valera'},
        {id: 5, name: 'Andrey'},
        {id: 6, name: 'Chris'},
      ],
      messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'Fine'},
        {id: 4, message: 'Yo'},
        {id: 5, message: 'Hello World'}
      ],
      newMessageBody: ''
    },
    profilePage: {
      posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 0},
        {id: 2, message: 'It\'s my first post', likesCount: 16},
      ],
      newPostText: "it-kamasutra.com"
    }
  },
  _callSubscriber (){
    console.log('state is changing')
  },

  getState (){
    return this._state
  },
  subscribe (observer){
    this._callSubscriber = observer
  },

 /* addPost (){
    let newPost: PostsType = {
      id: 3,
      message: this._state.profilePage.newPostText,
      likesCount: 0
    }
    this._state.profilePage.posts.push(newPost)
    this._state.profilePage.newPostText = ''
    this._callSubscriber()
  },
  updateTextPost (textOfPost: string){
    this._state.profilePage.newPostText = textOfPost
    this._callSubscriber()
  },*/

 dispatch (action) {
    if (action.type === 'ADD-POST'){
      let newPost: PostsType = {
        id: 3,
        message: this._state.profilePage.newPostText,
        likesCount: 0
      }
      this._state.profilePage.posts.push(newPost)
      this._state.profilePage.newPostText = ''
      this._callSubscriber()
    } else if (action.type === 'UPDATE-TEXT-POST'){
      this._state.profilePage.newPostText = action.textOfPost
      this._callSubscriber()
    } else if (action.type === 'UPDATE-MESSAGE-BODY') {
      this._state.messagesPage.newMessageBody = action.textOfMessage
      this._callSubscriber()
    } else if (action.type === 'SEND-MESSAGE'){
      let textOfMessage = this._state.messagesPage.newMessageBody
      this._state.messagesPage.newMessageBody = ''
      this._state.messagesPage.messages.push({id: 6, message: textOfMessage})
      this._callSubscriber()
    }
  }
}

export type DialogsType = {
  id: number,
  name: string
}
export type MessagesType = {
  id: number,
  message: string
}
export type messagesPageType = {
  dialogs: Array<DialogsType>
  messages: Array<MessagesType>
  newMessageBody: string
}
export type PostsType = {
  id: number
  message: string
  likesCount: number
}
export type profilePageType = {
  posts: Array<PostsType>
  newPostText: string
}
export type StateType = {
  messagesPage: messagesPageType
  profilePage: profilePageType
}
export type StoreType = {
  _state: StateType
  _callSubscriber: () => void
  getState: () => StateType
  subscribe: (observer: () => void) => void
  // addPost: ()=>void
  //updateTextPost: (textOfPost: string)=>void
  dispatch: (action: ActionType) => void
}

export type ActionType = ReturnType<typeof addPostAC> |
   ReturnType<typeof updateTextPostAC> |
   ReturnType<typeof updateMessageBodyAC> |
   ReturnType<typeof sendMessageAC>

export const addPostAC = () => ({type: 'ADD-POST'} as const)

export const updateTextPostAC = (textOfPost: string) =>
   ({type: "UPDATE-TEXT-POST", textOfPost: textOfPost} as const)

export const updateMessageBodyAC = (textOfMessage: string) =>
   ({type: "UPDATE-MESSAGE-BODY", textOfMessage: textOfMessage} as const)

export const sendMessageAC = () => ({type: "SEND-MESSAGE"} as const)

// @ts-ignore
window.store = store;


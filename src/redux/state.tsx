export type DialogsType = {
  id: number,
  name: string
}
export type MessagesType = {
  id: number,
  message: string
}
export type PostsType = {
  id: number
  message: string
  likesCount: number
}
type messagesPageType = {
  dialogs: Array<DialogsType>
  messages: Array<MessagesType>
}
type profilePageType = {
  posts: Array<PostsType>
}
export type StateType={
  messagesPage: messagesPageType
  profilePage: profilePageType
}

export let state: StateType = {
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
  ]
},
  profilePage: {
    posts: [
      {id: 1, message: 'Hi, how are you?', likesCount: 0},
      {id: 2, message: 'It\'s my first post', likesCount: 16},
    ]
  }
}
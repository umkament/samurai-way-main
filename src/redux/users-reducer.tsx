import {ActionType} from "./redux-store";

export type InitialStateUsersType = typeof initialState

type UserLocationType = {
  city: string,
  country: string
}
export type UserType = {
  id: number,
  photos: {
    small: string,
    large: string
  },
  followed: boolean,
  name: string,
  status: string,
 // location: UserLocationType
}

let initialState = {
    users: [
     /* {id: 1, photoUrl: 'https://v1.popcornnews.ru/k2/news/canvas/1200/upload/news/784626562470.jpg',
        followed: false, fullName: "Dmitry", status: "i'm a teacher", location: {city: 'Minsk', country: 'Belarus'}},
      {id: 2, photoUrl: 'https://avatars.mds.yandex.net/get-kino-vod-films-gallery/28788/47e2fd514411e18b76af786d7417062d/100x64_3',
        followed: true, fullName: "Christina", status: "i'm a student", location: {city: 'Volgograd', country: 'Russia'}},
      {id: 3, photoUrl: 'https://rg.ru/uploads/images/2022/11/02/ovot_cf9.jpg',
        followed: false, fullName: "Umka", status: "i'm a dream", location: {city: 'New-York', country: 'USA'}},*/
    ] as Array<UserType>,
  pageSize: 5,
  totalUsersCount: 0,
  currentPage: 2
}


export const usersReducer = (state: InitialStateUsersType = initialState, action: ActionType): InitialStateUsersType=> {
switch (action.type) {
  case 'FOLLOW':
    return {
      ...state,
      users: state.users.map(u => {
        if (u.id === action.userId) {
          return {...u, followed: true}
        }
        return u
      })
    }
  case 'UNFOLLOW':
    return {
      ...state,
      users: state.users.map(u => {
        if (u.id === action.userId) {
          return {...u, followed: false}
        }
        return u
      })
    }
  case 'SET-USERS':
    return {
      ...state,
      users: action.users
    }
  case 'SET-CURRENT-PAGE':
    return {
... state,
      currentPage: action.currentPage
    }
  case 'SET-TOTAL-USERS-COUNT':
    return {
      ... state,
      totalUsersCount: action.totalCount
    }
  default:
    return state
}
}

export const followAC = (userId: number) => ({type: 'FOLLOW', userId} as const)
export const unfollowAC = (userId: number) => ({type: "UNFOLLOW", userId} as const)
export const setUsersAC = (users: Array<UserType>) => ({type: "SET-USERS", users} as const)
export const setCurrentPageAC = (currentPage: number)=> ({type: 'SET-CURRENT-PAGE', currentPage} as const)
export const setTotalUsersCountAC = (totalUsersCount: number)=> ({type: 'SET-TOTAL-USERS-COUNT', totalCount: totalUsersCount } as const)
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
    users: [] as Array<UserType>,
  pageSize: 5,
  totalUsersCount: 0,
  currentPage: 2,
  isFetching: false
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
  case 'TOGGLE-IS-FETCHING':
    return {
      ... state,
      isFetching: action.isFetching
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
export const toggleIsFetchingAC = (isFetching: boolean)=> ({type: 'TOGGLE-IS-FETCHING', isFetching } as const)
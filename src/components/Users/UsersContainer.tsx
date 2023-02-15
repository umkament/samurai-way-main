import {connect} from "react-redux";
import {Users} from "./Users";
import {AppRootStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import {
  followAC,
  setCurrentPageAC, setTotalUsersCountAC,
  setUsersAC,
  unfollowAC,
  UserType
} from "../../redux/users-reducer";


type MapStatePropsType = {
  usersPage: Array<UserType>,
  pageSize: number,
  totalCount: number,
  currentPage: number
}

type MapDispatchPropsType = {
follow: (userId: number)=> void,
  unfollow: (userId: number)=> void,
  setUsers: (users: Array<UserType>)=> void,
  setCurrentPage: (pageNumber: number)=>void,
  setTotalUsersCount: (totalUsersCount: number)=> void
}

export type UsersPropsType = MapStatePropsType & MapDispatchPropsType

let mapStateToProps = (state: AppRootStateType): MapStatePropsType => {
 return {
   usersPage: state.users.users,
   pageSize: state.users.pageSize,
   totalCount: state.users.totalUsersCount,
   currentPage: state.users.currentPage
 }
}

let mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
return {
  follow: (userId: number)=>dispatch(followAC(userId)),
  unfollow: (userId: number)=> dispatch(unfollowAC(userId)),
  setUsers: (users: Array<UserType>)=> dispatch(setUsersAC(users)),
  setCurrentPage: (pageNumber: number)=>dispatch(setCurrentPageAC(pageNumber)),
  setTotalUsersCount: (totalUsersCount: number)=> dispatch(setTotalUsersCountAC(totalUsersCount))
}
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)
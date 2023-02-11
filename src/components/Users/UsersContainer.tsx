import {connect} from "react-redux";
import {Users} from "./Users";
import {AppRootStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import {followAC, InitialStateUsersType, setUsersAC, unfollowAC, UserType} from "../../redux/users-reducer";


type MapStatePropsType = {
  usersPage: InitialStateUsersType
}

type MapDispatchPropsType = {
follow: (userId: number)=> void,
  unfollow: (userId: number)=> void,
  setUsers: (users: Array<UserType>)=> void
}

export type UsersPropsType = MapStatePropsType & MapDispatchPropsType

let mapStateToProps = (state: AppRootStateType): MapStatePropsType => {
 return {
   usersPage: state.users
 }
}

let mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
return {
  follow: (userId: number)=>dispatch(followAC(userId)),
  unfollow: (userId: number)=> dispatch(unfollowAC(userId)),
  setUsers: (users: Array<UserType>)=> dispatch(setUsersAC(users))
}
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)
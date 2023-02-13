import React from "react";
import {UsersPropsType} from "./UsersContainer";
import styles from "./Users.module.css"
import axios from "axios";
import userPhoto from "../../assets/img/userPhoto.jpg copy.png"




export class Users extends React.Component<UsersPropsType> {
  componentDidMount() {
    axios.get('https://social-network.samuraijs.com/api/1.0/users').then(responce => {
      this.props.setUsers(responce.data.items)
    })
  }

  render() {
    return (
       <div>
         {
           this.props.usersPage.users.map(u =>
                 <div key={u.id}>
<span>
  <div>
    <img src={u.photos.small != null ? u.photos.small : userPhoto} className={styles.userPhoto}/>
  </div>
  <div>
    {u.followed
       ? <button onClick={() => {
         this.props.unfollow(u.id)
       }}>Unfollow</button>
       : <button onClick={() => {
         this.props.follow(u.id)
       }}>Follow</button>}
  </div>
</span>
                   <span>
             <span>
               <div>{u.name}</div>
               <div>{u.status}</div>
             </span>
             <span>
               <div>{"u.location.country"}</div>
               <div>{"u.location.city"}</div>
             </span>
           </span>
                 </div>
           )
         }

       </div>
    )
  }
}
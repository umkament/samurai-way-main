import React, {FC} from "react";
import styles from "./Users.module.css"
import userPhoto from "../../assets/img/userPhoto.jpg copy.png"
import {UserType} from "../../redux/users-reducer";


type UsersPropsType = {
  totalCount: number
  pageSize: number
  currentPage: number
  onPageClick: (pageNumber: number)=>void
  usersPage: Array<UserType>
  unfollow: (userId: number)=>void
  follow: (userId: number)=>void
}

const Users: FC<UsersPropsType> = (props) => {

  let pagesCount = Math.ceil(props.totalCount / props.pageSize);

  let pages = []
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i)
  }

    return (
       <div>
         <div>
           {pages.map(p => {
             // @ts-ignore
             return <span className={props.currentPage === p && styles.selectedPage}
                          onClick={() => {
                            props.onPageClick(p)
                          }}>{p}</span>
           })}
         </div>
         {
           props.usersPage.map(u =>
                 <div key={u.id}>
<span>
  <div>
    <img src={u.photos.small != null ? u.photos.small : userPhoto} className={styles.userPhoto}/>
  </div>
  <div>
    {u.followed
       ? <button onClick={() => {
         props.unfollow(u.id)
       }}>Unfollow</button>
       : <button onClick={() => {
         props.follow(u.id)
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


export default Users;



import React from 'react';
import s from './Post.module.css'

const Post = () => {
  return (
       <div className={s.item}>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQu_fpPmbK-bebEeX036y7frmW06amtCkG1ew&usqp=CAU'/>
         Post 1
         <div>
           <span>like</span>
         </div>
       </div>

  )
}

export default Post;


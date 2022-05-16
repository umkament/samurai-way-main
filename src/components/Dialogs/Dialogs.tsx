import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css'

type DialogPropsType ={
  id: number
  name: string
}
const Dialog = (props: DialogPropsType) => {
  let path = '/dialogs/' + props.id
  return  <div className={s.dialog + ' ' + s.active}>
    <NavLink to={path}>{props.name}</NavLink>
  </div>
}

type MessagePropsType = {
  message: string
}

const Message = (props: MessagePropsType) => {
  return <div className={s.message}>{props.message}</div>
}



type DialogsPropsType = {

}
const Dialogs = (props: DialogsPropsType) => {
  let dialogsData = [
    {id: 1, name: 'Dima'},
    {id: 2, name: 'Viktor'},
    {id: 3, name: 'Petia'},
    {id: 4, name: 'Valera'},
    {id: 5, name: 'Andrey'},
    {id: 6, name: 'Chris'},
  ]

  let messagesData = [
    {id: 1, message:'Hi'},
    {id: 2, message:'How are you?'},
    {id: 3, message:'Fine'},
    {id: 4, message:'Yo'},
    {id: 5, message:'Hello World'}
  ]


  return (
     <div className={s.dialogs}>
       <div className={s.dialogsItem}>
       <Dialog name={dialogsData[0].name} id={dialogsData[0].id} />
       <Dialog name={dialogsData[1].name} id={dialogsData[1].id} />

     {/*  <Dialog name="Viktor" id='2' />
       <Dialog name="Petia" id='3' />
       <Dialog name="Valera" id='4' />
       <Dialog name="Andrey" id='5' />
       <Dialog name="Chris" id='6' />*/}
       </div>
       <div className={s.messages}>
         <Message message={messagesData[0].message}/>
         <Message message={messagesData[1].message}/>

        {/* <Message message='Fine'/>
         <Message message='Yo'/>
         <Message message='Hello World'/>*/}
       </div>
     </div>
  );
};

export default Dialogs;
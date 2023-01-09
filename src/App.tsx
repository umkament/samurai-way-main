import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import Navigation from "./components/Navigation/Navigation";
import Dialogs from "./components/Dialogs/Dialogs";
import {Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./Music/Music";
import Settings from "./Settings/Settings";
import {StateType} from "./redux/state";

type AppPropsType = {
  state: StateType,
  addPost: (postMessage: string)=> void
}

function App (props: AppPropsType) {
  return (
       <div className='app-wrapper'>
         <Header/>
         <Navigation/>
         <div className='app-wrapper-content'>


           <Route path='/dialogs' render={ () => <Dialogs dialogs={props.state.messagesPage.dialogs} messages={props.state.messagesPage.messages}/> }/>
           <Route path='/profile' render={() =>
              <Profile posts={props.state.profilePage.posts}
                       addPost={props.addPost}
              />}
           />
           <Route path='/news' render={() => <News/>}/>
           <Route path='/music' render={() => <Music/>}/>
           <Route path='/settings' render={() => <Settings/>}/>
         </div>
       </div>
  )
}

export default App;

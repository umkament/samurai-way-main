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
  addPost: () => void
  updateTextPost: (textOfPost: string) => void
}

function App(props: AppPropsType) {
  return (
     <div className='app-wrapper'>
       <Header/>
       <Navigation/>
       <div className='app-wrapper-content'>


         <Route path='/dialogs' render={() =>
            <Dialogs messagesPage={props.state.messagesPage}

            />
         }
         />
         <Route path='/profile' render={() =>
            <Profile profilePage={props.state.profilePage}
                     addPost={props.addPost}
                     updateTextPost={props.updateTextPost}

            />
         }
         />
         <Route path='/news' render={() => <News/>}/>
         <Route path='/music' render={() => <Music/>}/>
         <Route path='/settings' render={() => <Settings/>}/>
       </div>
     </div>
  )
}

export default App;

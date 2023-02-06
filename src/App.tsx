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
import {StoreType} from "./redux/store";

type AppPropsType = {
  store: StoreType
 //addPost: () => void
  //updateTextPost: (textOfPost: string) => void
}

const App: React.FC<AppPropsType> = (props) => {

  return (
     <div className='app-wrapper'>
       <Header/>
       <Navigation/>
       <div className='app-wrapper-content'>


         <Route path='/dialogs' render={() =>
            <Dialogs store={props.store}/>
         }
         />
         <Route path='/profile' render={() =>
            <Profile store={props.store}/>
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

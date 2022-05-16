import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navigation/Navigation";
import Profile from "./components/Profile/Profile";
import Navigation from "./components/Navigation/Navigation";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./Music/Music";
import Settings from "./Settings/Settings";


function App() {
  return (
     <BrowserRouter>
       <div className='app-wrapper'>
         <Header/>
         <Navigation/>
         <div className='app-wrapper-content'>
<Route path='/dialogs' component={Dialogs}/>
<Route path='/profile' component={Profile}/>
<Route path='/news' component={News}/>
<Route path='/music' component={Music}/>
<Route path='/settings' component={Settings}/>
         </div>
       </div>
     </BrowserRouter>
  )
}

export default App;

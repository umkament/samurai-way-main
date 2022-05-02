import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navigation/Navigation";
import Profile from "./components/Profile/Profile";
import Navigation from "./components/Navigation/Navigation";



function App() {
  return (
    <div className='app-wrapper'>
    <Header/>
     <Navigation/>
      <Profile/>
    </div>
  )
}

export default App;

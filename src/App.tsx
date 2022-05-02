import React from 'react';
import './App.css';
import Header from "./components/Header";
import Navbar from "./components/Navigation";
import Profile from "./components/Profile";
import Navigation from "./components/Navigation";



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

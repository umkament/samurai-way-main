import React from 'react';
import './App.css';
import {BrowserRouter} from "react-router-dom";
import Technologies from "./Technologies";
import Header from "./Header";


function App() {
  return (
     <BrowserRouter>
    <div className="App">
     Hello, samurai! Let's go!
      <Header/>
      <Technologies/>
    </div>
     </BrowserRouter>
  );
}

export default App;

import React from 'react';
import './index.css';
import {store} from "./redux/redux-store";
import ReactDOM from "react-dom";
import App from "./App";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";

export let rerenderEntireTree = () => {
  ReactDOM.render(
     <BrowserRouter>
       <Provider store={store}>
       <App/>
       </Provider>
     </BrowserRouter>,
     document.getElementById('root')
  );
}

rerenderEntireTree()
store.subscribe(()=> {rerenderEntireTree()})

/*

ReactDOM.render(
   <Provider store={store}>
     <App />
   </Provider>,  document.getElementById('root'));
*/

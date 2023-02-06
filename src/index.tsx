import React from 'react';
import './index.css';
import {store} from "./redux/store";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";

export let rerenderEntireTree = () => {
  ReactDOM.render(
     <BrowserRouter>
       <App //state={store.getState()}
          store={store}
         // addPost={store.addPost.bind(store)}
         // updateTextPost={store.updateTextPost.bind(store)}
       />
     </BrowserRouter>,
     document.getElementById('root')
  );
}

rerenderEntireTree()
store.subscribe(rerenderEntireTree)
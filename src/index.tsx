import React from 'react';
import './index.css';
import {store} from "./redux/redux-store";
import ReactDOM from "react-dom";
import App from "./App";
import {Provider} from "react-redux";

/*
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
store.subscribe(()=> {rerenderEntireTree()})*/

ReactDOM.render(
   <Provider store={store}>
     <App />
   </Provider>,  document.getElementById('root'));
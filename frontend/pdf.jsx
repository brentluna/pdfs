import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';


document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {
    const initialState = {session, {currentUser: window.currentUser, errors: []}};
    store = configureStore(initialState);
  } else {
    store = configureStore();
  }
  window.store = store;

  const rootHTML = document.getElementById('rootHTML');
  ReactDOM.render(<h1>test</h1>, rootHTML);
});

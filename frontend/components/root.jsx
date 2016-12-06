import React from 'react';
import {Provider} from 'react-redux';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import LoginContainer from './login/login_container';
import PDFContainer from './pdf/pdf_container';
import App from './app';
const Root = ({store}) => {
  

  const _ensureLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (!currentUser) {
      replace('/login');
    }
  }

  const _redirectIfLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (currentUser) {
      replace('/pdfs');
    }
  }

  return (
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path='/' component={App}>
          <IndexRoute component={LoginContainer} onEnter={_redirectIfLoggedIn} />
          <Route path='/login' component={LoginContainer} onEnter={_redirectIfLoggedIn} />
          <Route path ='/pdfs' component={PDFContainer} onEnter={_ensureLoggedIn}/>
        </Route>
      </Router>
    </Provider>
  )
}

export default Root;

import {SessionConstants, receiveUser, receiveErrors} from '../actions/session_actions';
import {login, logout, signup} from '../util/session_api.js';
import {hashHistory} from 'react-router';

const SessionMiddleware = store => next => action => {
  const success = user => {
    store.dispatch(receiveUser(user));
    const interval = setInterval(() => {
      if (store.getState().session.currentUser){
        hashHistory.push('/pdfs');
        clearInterval(interval);
      }
    }, 50);
  }

  const logoutSuccess = () => {
    const interval = setInterval(() => {
      if (!store.getState().session.currentUser) {
        hashHistory.push('/login');
        clearInterval(interval);
      }
    }, 50);
  }
  const error = xhr => store.dispatch(receiveErrors(xhr.responseJSON));
  switch(action.type) {
    case SessionConstants.LOGIN:
      login(action.user, success, error);
      return next(action);
    case SessionConstants.LOGOUT:
      logout(logoutSuccess, error);
      return next(action);
    case SessionConstants.SIGNUP:
      signup(action.user, success, error);
      return next(action);
    default:
      return next(action);
  }
}


export default SessionMiddleware;

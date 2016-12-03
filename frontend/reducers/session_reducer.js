import {SessionConstants} from '../actions/session_actions';
import merge from 'lodash/merge';

const nullUser = Object.freeze({
  currentUser: null,
  errors: []
});


const SessionReducer = (state = nullUser, action) => {
  switch(action.type) {
    case SessionConstants.RECEIVE_USER:
      const currentUser = action.user;
      return merge({}, nullUser, {currentUser});
    case SessionConstants.LOGOUT:
      return merge({}, nullUser);
    case SessionConstants.RECEIVE_ERRORS:
      const errors = action.errors
      return merge({}, nullUser, {errors});
    default:
      return state; 
  }
}

export default SessionReducer;

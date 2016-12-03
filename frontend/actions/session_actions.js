export const SessionConstants = {
  LOGIN: 'LOGIN',
  LOGOUT: 'LOGOUT',
  SIGNUP: 'SIGNUP',
  RECEIVE_USER: 'RECEIVE_USER',
  RECEIVE_ERRORS: 'RECEIVE_ERRORS'
}

export const login = user => ({
  type: SessionConstants.LOGIN,
  user
});

export const logout = () => ({
  type: SessionConstants.LOGOUT 
});

export const signup = user => ({
  type: SessionConstants.SIGNUP,
  user
});

export const receiveUser = user => ({
  type: SessionConstants.RECEIVE_USER,
  user
});

export const receiveErrors = errors => ({
  type: SessionConstants.RECEIVE_ERRORS,
  errors
});

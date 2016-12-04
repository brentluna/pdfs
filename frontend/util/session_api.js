

export const login = (user, success, error) => (
  $.ajax({
    method: 'POST',
    url: '/api/session',
    data: {user: user},
    success, 
    error
  })
);
 
export const signup = (user, success, error) => (
  $.ajax({
    method: 'POST',
    url: '/api/users',
    data: {user: user},
    success, 
    error
  })
);

export const logout = (error) => (
 $.ajax({
   method: 'delete',
   url: '/api/session',
   error: error
 })
);

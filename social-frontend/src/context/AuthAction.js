export const LoginStart = (user) => ({
    type: "LOGIN_START",
  });
  
  export const LoginSuccess = (user) => ({
    type: "LOGIN_SUCCESS",
    payload: user,
  });
  
  export const LoginFailure = (user) => ({
    type: "LOGIN_FAILURE",
    payload : error,
  });
  
  export const Follow = (userId) => ({
    type: "FOLLOW",
    payload: userId,
  });
  
  export const Unfollow = (userId) => ({
    type: "UNFOLLOW",
    payload: userId,
  });
  
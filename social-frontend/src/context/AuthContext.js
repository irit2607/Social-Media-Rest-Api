import { createContext, useReducer } from "react";
import AuthReducer from "./AuthReducer";

const INITIAL_STATE = {
    user : {
      _id:"61a23403fcac47183c252fbd",
      profilePicture:"https://avatars.githubusercontent.com/u/67689773?v=4",
      coverPicture:"",
      followers:[],
      followings:[],
      isAdmin:false,
      username:"ir5r",
      email:"irit265@gmail.com",
     
    } ,
    isFecthing : false,
    error: false,
};

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);
  
  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
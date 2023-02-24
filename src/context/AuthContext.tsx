import React, {createContext, useReducer} from 'react';
import {authReducer} from './authReducer';

export interface AuthState {
  isLoggedIn: Boolean;
  username?: string;
  favouriteIcon?: string;
}

// Estado inicial, justo cuando la aplicacion se lanza
export const authInitialState: AuthState = {
  isLoggedIn: false,
  username: undefined,
  favouriteIcon: undefined,
};
// Esta es la informacion que va a exponer el context
export interface AuthContextProps {
  authState: AuthState;
  signIn: () => void;
  changeFavIcon: (iconName: string) => void;
  logout: () => void;
  changeUsername: (username: string) => void;
}
// Crear el contexto
export const AuthContext = createContext({} as AuthContextProps);

// Exponer el proveedor de informacion
export const AuthProvider = ({children}: any) => {
  const [authState, dispatch] = useReducer(authReducer, authInitialState);

  const signIn = () => {
    dispatch({type: 'signIn'});
  };

  const changeFavIcon = (iconName: string) => {
    dispatch({type: 'changeFavIcon', payload: iconName});
  };

  const changeUsername = (username: string) => {
    dispatch({type: 'changeUsername', payload: username});
  };

  const logout = () => {
    dispatch({type: 'logout'});
  };
  return (
    <AuthContext.Provider
      // Necesito proveer la interface de authContextProps
      value={{
        authState,
        signIn,
        changeFavIcon,
        logout,
        changeUsername,
      }}>
      {children}
    </AuthContext.Provider>
  );
};

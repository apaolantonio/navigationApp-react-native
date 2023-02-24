import {AuthState} from './AuthContext';

type AuthAction =
  | {type: 'signIn'}
  | {type: 'logout'}
  | {type: 'changeFavIcon'; payload: string}
  | {type: 'changeUsername'; payload: string};

export const authReducer = (
  state: AuthState,
  action: AuthAction,
): AuthState => {
  switch (action.type) {
    case 'signIn':
      return {...state, isLoggedIn: true, username: 'not-username-yet'};
    case 'logout':
      return {
        ...state,
        favouriteIcon: undefined,
        isLoggedIn: false,
        username: undefined,
      };
    case 'changeFavIcon':
      return {...state, favouriteIcon: action.payload};
    case 'changeUsername':
      return {...state, username: action.payload};
    default:
      return state;
  }
};

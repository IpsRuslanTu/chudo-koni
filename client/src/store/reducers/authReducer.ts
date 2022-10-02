import { AuthActionTypes } from '../actions/auth.actions';
import { ActionTypes } from '../actions/action.types';

interface AuthState {
  accessToken: string;
}

const defaultState: AuthState = {
  accessToken: '',
};

export const authReducer = (
  state: AuthState = defaultState,
  action: AuthActionTypes
): AuthState => {
  switch (action.type) {
    case ActionTypes.ADD_ACCESS_TOKEN:
      return { ...state, accessToken: action.payload };
    case ActionTypes.REMOVE_ACCESS_TOKEN:
      return { ...state, accessToken: '' };
    default:
      return state;
  }
};

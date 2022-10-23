import { ActionTypes } from './action.types';

interface AddAccessTokenAction {
  type: ActionTypes.ADD_ACCESS_TOKEN;
  payload: string;
}

interface RemoveAccessTokenAction {
  type: ActionTypes.REMOVE_ACCESS_TOKEN;
}

export function addAccessTokenAction(payload: string): AddAccessTokenAction {
  return {
    type: ActionTypes.ADD_ACCESS_TOKEN,
    payload,
  };
}

export function removeAccessTokenAction(): RemoveAccessTokenAction {
  return {
    type: ActionTypes.REMOVE_ACCESS_TOKEN,
  };
}

export type AuthActionTypes = AddAccessTokenAction | RemoveAccessTokenAction;

import { combineReducers, createStore } from 'redux';
import { authReducer } from './reducers/authReducer';
import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducer = combineReducers({
  auth: authReducer,
});

export const store = createStore(rootReducer, composeWithDevTools());
export type AppState = ReturnType<typeof rootReducer>;

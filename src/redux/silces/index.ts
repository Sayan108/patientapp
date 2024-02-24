import {authReducer} from './auth.silce';
import {IApplicationStates, IAuthState} from '../redux.constants';
import {combineReducers} from '@reduxjs/toolkit';
import {applicationReducer} from './application.slice';
export type RootState = {
  auth: IAuthState;
  appliction: IApplicationStates;
};

export const rootReducer = combineReducers({
  auth: authReducer,
  application: applicationReducer,
});

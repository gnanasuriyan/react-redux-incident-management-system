import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectLogin = (state: any) => state.login || initialState;
const makeSelectLoginLoading = () => createSelector(selectLogin, loginState => loginState.loading);
const makeSelectLoginError = () => createSelector(selectLogin, loginState => loginState.loading);

export {
  makeSelectLoginLoading,
  makeSelectLoginError,
};

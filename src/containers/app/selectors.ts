import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectGlobal = (state: any) => state.global || initialState;

const makeSelectUserDetails = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.userDetails,
  );

const makeSelectError = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.error,
  );

const makeSelectIsSessionValid = () => 
  createSelector(
    selectGlobal,
    globalState => globalState.isSessionValid,
  );

export {
  selectGlobal,
  makeSelectIsSessionValid,
  makeSelectUserDetails,
  makeSelectError,
};

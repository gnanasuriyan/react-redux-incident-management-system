import { createSelector } from 'reselect';
import { initialState } from './reducer';

const incidentState = (state: any) => state.incidentList || initialState;

const makeSelectIncidentList = () =>
  createSelector(
    incidentState,
    state => state.incidentList,
  );

const makeSelectError = () =>
  createSelector(
    incidentState,
    state => state.error,
  );

const makeSelectLoading = () => 
  createSelector(
    incidentState,
    state => state.loading,
  );

export {
  makeSelectIncidentList,
  makeSelectError,
  makeSelectLoading,
};

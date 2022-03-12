import produce from 'immer';
import { ActionTypePayload } from '../../app.type';
import { LOAD_INCIDENT_LIST_SUCCEED, LOAD_INCIDENT_LIST_FAILED } from './constants';

export const initialState = {
    loading: false,
    error: null,
    incidentList: []
};

const appReducer = (state = initialState, action: ActionTypePayload) =>
    produce(state, draft => {
        switch (action.type) {
        case LOAD_INCIDENT_LIST_SUCCEED:
            draft.incidentList = action.payload;
            draft.loading = true;
            break; 
        case LOAD_INCIDENT_LIST_FAILED:
            draft.error = action.error
            draft.loading = false;
            break;
        }
    });

export default appReducer;

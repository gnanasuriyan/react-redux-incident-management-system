import produce from 'immer';
import { ActionTypePayload } from '../../app.type';
import { CHECK_SESSION_SUCCEED, CHECK_SESSION_FAILED, UPDATE_SESSION } from './constants';

export const initialState = {
    userDetails: null,
    error: null,
    isSessionValid: false
};

const appReducer = (state = initialState, action: ActionTypePayload) =>
    produce(state, draft => {
        switch (action.type) {
        case CHECK_SESSION_SUCCEED:
        case UPDATE_SESSION:
            draft.userDetails = action.payload;
            draft.isSessionValid = true;
            break; 
        case CHECK_SESSION_FAILED:
            draft.error = action.payload
            draft.isSessionValid = false;
            break;
        }
    });

export default appReducer;

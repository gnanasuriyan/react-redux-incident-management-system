import produce from 'immer';
import { ActionTypePayload } from '../../app.type';
import { DO_LOGIN, DO_LOGIN_FAILURE, DO_LOGIN_SUCCESS } from './constant';

// The initial state of the App
export const initialState = {
  loading: false,
  error: false,
};

/* eslint-disable default-case, no-param-reassign */
const loginReducer = (state = initialState, action: ActionTypePayload) => produce(state, draft => {
    switch (action.type) {
    case DO_LOGIN:
        draft.loading = true;
        draft.error = false;
        break;

    case DO_LOGIN_SUCCESS:
        draft.loading = false;
        break;

    case DO_LOGIN_FAILURE:
        draft.error = action.error;
        draft.loading = false;
        break;
    }
});

export default loginReducer;

import produce from 'immer';
import { ActionTypePayload } from '../../app.type';
import { DO_LOGIN, DO_LOGIN_FAILED, DO_LOGIN_SUCCEED } from './constants';

// The initial state of the App
export const initialState = {
  loading: false,
  error: null,
  isLoginSucceed: false
};

/* eslint-disable default-case, no-param-reassign */
const loginReducer = (state = initialState, action: ActionTypePayload) => produce(state, draft => {
    switch (action.type) {
    case DO_LOGIN:
        draft.loading = true;
        break;

    case DO_LOGIN_SUCCEED:
        draft.loading = false;
        draft.isLoginSucceed = true;
        break;

    case DO_LOGIN_FAILED:
        draft.error = action.error;
        draft.loading = false;
        break;
    }
});

export default loginReducer;

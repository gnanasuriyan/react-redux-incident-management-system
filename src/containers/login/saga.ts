import { call, put, select, takeLatest } from 'redux-saga/effects';
import { doLoginSucceed, doLoginFailed } from './actions';
import { updateSession } from '../app/actions';

import request from '../../utils/request';
import { ActionTypePayload, ResponseGenerator } from '../../app.type';
import { DO_LOGIN } from './constants';

export function* doLogin(action: ActionTypePayload) {
    try {
        const resp: ResponseGenerator = yield call(request, '/data/login.json');
        yield put(doLoginSucceed(resp));
        yield put(updateSession(resp));
    } catch (err) {
        yield put(doLoginFailed(err));
    }
}

export default function* loadApp() {
    yield takeLatest(DO_LOGIN, doLogin);
}

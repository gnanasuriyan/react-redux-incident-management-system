import { call, put, select, takeLatest } from 'redux-saga/effects';
import { checkSessionSucceed, checkSessionFailed } from './actions';

import request from '../../utils/request';
import { ResponseGenerator } from '../../app.type';
import { CHECK_SESSION } from './constants';

export function* checkSession() {
    try {
        const resp: ResponseGenerator = yield call(request, '/data/session.json');
        yield put(checkSessionSucceed(resp));
    } catch (err) {
        yield put(checkSessionFailed(err));
    }
}

export default function* loadApp() {
    yield takeLatest(CHECK_SESSION, checkSession);
}

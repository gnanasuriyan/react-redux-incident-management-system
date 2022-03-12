import { call, put, select, takeLatest } from 'redux-saga/effects';
import { loadIncidentListSucceed, loadIncidentListFailed } from './actions';
import { LOAD_INCIDENT_LIST } from './constants';
import request from '../../utils/request';
import { ResponseGenerator } from '../../app.type';

export function* loadIncidentList() {
    try {
        const resp: ResponseGenerator = yield call(request, '/data/incident-list.json');
        yield put(loadIncidentListSucceed(resp));
    } catch (err) {
        yield put(loadIncidentListFailed(err));
    }
}

export default function* loadApp() {
    yield takeLatest(LOAD_INCIDENT_LIST, loadIncidentList);
}

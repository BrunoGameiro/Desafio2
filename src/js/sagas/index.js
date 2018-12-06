import { call, put, takeLatest } from 'redux-saga/effects'
import { FETCH_ARTICLES, ARTICLES_FETCH_SUCCEEDED, ARTICLES_FETCH_ERROR } from '../constants/action-types'


import {ENDPOINT} from "../constants/services";

function fetchAll() {
    return fetch(ENDPOINT).then(response => response.json(), );
}

function* fetchArticles() {
    try {
        const articles = yield call(fetchAll);
        yield put({type: ARTICLES_FETCH_SUCCEEDED, payload: articles});
    } catch (e) {
        yield put({type: ARTICLES_FETCH_ERROR, message: e.message});
    }
}

function* mySaga() {
    yield takeLatest(FETCH_ARTICLES, fetchArticles);
}

export default mySaga;
//takeLatest or takeEvery
import { call, pull, put, takeEvery } from 'redux-saga/effects'
import { GET_USERS_FETCH, getUsersSuccess } from './actions'

function* workGetUsersFetch() {
    console.log("hander")
    const response = yield call(fetch, `https://jsonplaceholder.typicode.com/users`);
    const users = yield response.json();
    console.log(users)
    yield put(getUsersSuccess(users));
}

function* mySaga() {
    yield takeEvery(GET_USERS_FETCH, workGetUsersFetch);
}

export default mySaga;
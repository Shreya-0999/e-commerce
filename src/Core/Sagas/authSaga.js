import { takeLatest, put, all, call } from "redux-saga/effects";
import user from '../Types/userTypes';
import { createUserData, checkUserData, logoutUser } from './Utils/funtions'

export function* loginSaga(action) {
    // check the credentials
    try {
        let res = yield(call(checkUserData, action.payload.email, action.payload.password));
        if (res) {
            yield put({ type: user.LOGIN_SUCCESS, payload: res });
        }
        else {
            yield put({ type: user.LOGIN_ERROR, payload: "Invalid email or password" });
        }
    }
    catch (err) {
        yield put({ type: user.LOGIN_ERROR, payload: err })
    }
}

export function* signupSaga(action) {
    try {
        let res = yield (call(createUserData, action.payload.name, action.payload.email, action.payload.password))
        if (res)
            yield put({ type: user.SIGNUP_SUCCESS, payload: res });
        else
            yield put({ type: user.SIGNUP_ERROR, payload: 'User Already Exists' })

    }
    catch (err) {
        yield put({ type: user.SIGNUP_ERROR, payload: err })
    }
}

export function* logoutSaga(action) {
    try {
        logoutUser();
        yield put({ type: user.LOGOUT_SUCCESS });

    }
    catch (err) {
        console.log(err);
    }
}

export default function* authSaga() {
    yield all([
        yield takeLatest(user.LOGIN_START, loginSaga),
        yield takeLatest(user.SIGNUP_START, signupSaga),
        yield takeLatest(user.LOGOUT_START, logoutSaga),
    ])
}
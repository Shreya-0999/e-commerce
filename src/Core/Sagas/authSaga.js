import { takeEvery, put } from "redux-saga/effects";
import user from '../Types/userTypes';

export function * loginSaga(action) {
    // check the credentials
    try{
        if(action.payload.email === 'shreya@gmail.com' && action.payload.password === '123456'){
            localStorage.setItem("user", JSON.stringify({email: action.payload.email}));
            yield put({type: user.LOGIN_SUCCESS, payload: {email: action.payload.email}});
        }
        else{
            yield put({type: user.LOGIN_ERROR, payload: "Invalid email or password"});
        }
    }
    catch(err){
        yield put({type: user.LOGIN_ERROR, payload: err})
        console.log(err)
    }
}

export function * signupSaga(action){
    try{
        // store the ceredentials
        yield put({type: user.SIGNUP_SUCCESS, payload: action.payload});

    }
    catch(err){
        yield put({type: user.SIGNUP_ERROR, payload: err})
    }
}

export function * logoutSaga(action){
    try{
        // store the ceredentials
        yield put({type: user.LOGOUT_SUCCESS});

    }
    catch(err){
        console.log(err);
    }
}
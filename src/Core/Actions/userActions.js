import user from '../Types/userTypes';

export const loginStart = ({email,password})=>({
    type: user.LOGIN_START,
    payload: {email, password}
})

export const loginSucess = (user)=>({
    type: user.LOGIN_SUCCESS,
    payload: user
})

export const loginError = (error)=>({
    type: user.LOGIN_ERROR,
    payload: error
})

export const signupStart = ({name,email,password})=>({
    type: user.SIGNUP_START,
    payload: {name, email, password}
})

export const signupSucess = (user)=>({
    type: user.SIGNUP_SUCCESS,
    payload: user
})

export const signupError = (error)=>({
    type: user.SIGNUP_ERROR,
    payload: error
})

export const logoutStart = ()=>({
    type: user.LOGOUT_START,
})

export const logoutSucess = ()=>({
    type: user.LOGOUT_SUCCESS,
})


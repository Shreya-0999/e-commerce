import user from '../Types/userTypes';
const INITIAL_STATE = {
    currentUser: null,
    errorLogin: null,
    errorSignup: null,
}

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case user.LOGIN_START:
            return {
                ...state,
            }
        case user.LOGIN_SUCCESS:
            return {
                ...state,
                currentUser: action.payload,
                errorLogin: null
            }
        case user.LOGIN_ERROR:
            return {
                ...state,
                errorLogin: action.payload,
            }
        case user.SIGNUP_START:
            return {
                ...state,
            }
        case user.SIGNUP_SUCCESS:
            return {
                ...state,
                currentUser: action.payload,
                errorSignup: null
            }
        case user.SIGNUP_ERROR:
            return {
                ...state,
                errorSignup: action.payload
            }
        case user.LOGOUT_SUCCESS:
            return {
                ...INITIAL_STATE
            }

        default: return state;
    }
}

export default userReducer;

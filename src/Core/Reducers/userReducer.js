import user from '../Types/userTypes';
const INITIAL_STATE = {
    currentUser: null,
    error: '',
    isLoading: false,
}

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case user.LOGIN_START:
            return {
                ...state,
                isLoading: true,
            }
        case user.LOGIN_SUCCESS:
            return {
                ...state,
                currentUser: action.payload,
                isLoading: false,
                error: ''
            }
        case user.LOGIN_ERROR:
            return {
                ...state,
                error: action.payload,
                isLoading: false
            }
        case user.SIGNUP_START:
            return {
                ...state,
                isLoading: true,
            }
        case user.SIGNUP_SUCCESS:
            return {
                ...state,
                currentUser: action.payload,
                isLoading: false,
                error: ''
            }
        case user.SIGNUP_ERROR:
            return {
                ...state,
                error: action.payload
            }
        case user.LOGOUT_SUCCESS:
            return {
                // ...INITIAL_STATE
            }

        default: return state;
    }
}

export default userReducer;

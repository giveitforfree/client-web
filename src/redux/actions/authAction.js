import jwt_decode from 'jwt-decode';
import { SET_LOGOUT_USER, LOGIN_SUCCESS } from "./types";
import { login, } from "../../services/AuthApi";

export const authAction = (payload) => {
    return (dispatch) => {
        const { createAccount = false, ...credentials } = payload;
        if (createAccount) {
            // return dispatch(register(credentials))
        } else {
            return login(credentials).then(response => response.data).then(response => {
                if (response && response.status === 'success' && response.token) {
                    const { token } = response
                    localStorage.setItem('token', token)
                    const user = dispatch(getCurrentUser(token));
                    dispatch({ type: LOGIN_SUCCESS, payload: user })
                    return user;
                }
            })
        }
    }
}

export const logoutAction = () => {
    return dispatch => {
        dispatch({ type: SET_LOGOUT_USER })
        localStorage.clear()
    }
}

export const getCurrentUser = (token = null) => {
    return dispatch => {
        const _token = token || localStorage.getItem('token')
        if (!_token) {
            return null;
        } else {
            const decoded = jwt_decode(_token);
            if ((decoded?.exp * 1000 < Date.now())) {
                dispatch({ type: SET_LOGOUT_USER })
                localStorage.clear()
                return null;
            }
            return { ...decoded, token }
        }
    }
}


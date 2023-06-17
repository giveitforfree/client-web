import jwt_decode from 'jwt-decode';
import { SET_LOGGED_USER, SET_LOGGED_USER_FAILURE, SET_LOGOUT_USER } from "./types";

export const authAction = (payload) => {
    return async dispatch => {

    }
}

export const logoutAction = () => {
    return dispatch => {
        dispatch({ type: SET_LOGOUT_USER })
        localStorage.clear()
    }
}

export const getCurrentUser = () => {
    return dispatch => {
        const token = JSON.parse(localStorage.getItem('token'))
        const user = JSON.parse(localStorage.getItem('user'))

        if (!token || !user) {
            return null;
        } else {
            const decoded = jwt_decode(token);
            if ((decoded?.exp * 1000 < Date.now() || decoded?.user_id !== user.id)) {
                dispatch({ type: SET_LOGOUT_USER })
                localStorage.clear()
                return null;
            }
            console.log(decoded)
            return decoded
        }
    }
}

const setUserPayload = (user) => {
    return dispatch => {
        if (user?.accessToken) {
            user = { ...user, id: user.uid }
            localStorage.setItem('token', JSON.stringify(user.accessToken));
            localStorage.setItem('user', JSON.stringify({ id: user.id, email: user.email }));
        }
        dispatch({ type: SET_LOGGED_USER, payload: user })
    }
}
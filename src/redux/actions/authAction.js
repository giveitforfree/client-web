import { FacebookAuthProvider, GoogleAuthProvider, ProviderId, signInWithEmailAndPassword, signInWithPopup, TwitterAuthProvider } from "firebase/auth";
import jwt_decode from 'jwt-decode';
import { auth } from "../../firebase/config";
import { SET_LOGGED_USER, SET_LOGGED_USER_FAILURE, SET_LOGOUT_USER } from "./types";

export const authAction = (payload) => {
    return async dispatch => {

        const { isSignin = true, signInProvider = ProviderId.PASSWORD, username: email, password, } = payload;

        // sign up/in with only ProviderId.PASSWORD 
        if (isSignin) {
            if (signInProvider === ProviderId.PASSWORD) {
                return signInWithEmailAndPassword(auth, email, password)
                    .then((userCredential) => {
                        let user = userCredential.user;
                        dispatch(setUserPayload(user))
                        return user
                    })
                    .catch((error) => {
                        const { code: errorCode, message: errorMessage } = error;
                        dispatch({ type: SET_LOGGED_USER_FAILURE, payload: { errorCode, errorMessage } })
                    });
            }
        } else {
            if (signInProvider === ProviderId.PASSWORD) {
                return signInWithEmailAndPassword(auth, email, password)
                    .then((userCredential) => {
                        let user = userCredential.user;
                        dispatch(setUserPayload(user))
                        return user
                    })
                    .catch((error) => {
                        const { code: errorCode, message: errorMessage } = error;
                        dispatch({ type: SET_LOGGED_USER_FAILURE, payload: { errorCode, errorMessage } })
                    });
            }
        }

        if (signInProvider === ProviderId.GOOGLE) {
            const provider = new GoogleAuthProvider();
            provider.addScope('profile');
            provider.addScope('email');
            provider.setCustomParameters({ prompt: 'select_account' })
            const result = await signInWithPopup(auth, provider);
            const user = result.user;
            dispatch(setUserPayload(user))
            return new Promise((resolve) => resolve(user))
        }

        if (signInProvider === ProviderId.FACEBOOK) {
            const provider = new FacebookAuthProvider();
            provider.addScope('user_birthday');
            const result = await signInWithPopup(auth, provider);
            const user = result.user;
            dispatch(setUserPayload(user))
            return new Promise((resolve) => resolve(user))
        }

        if (signInProvider === ProviderId.TWITTER) {
            const provider = new TwitterAuthProvider();
            provider.addScope('user_birthday');
            const result = await signInWithPopup(auth, provider);
            const user = result.user;
            dispatch(setUserPayload(user))
            return new Promise((resolve) => resolve(user))
        }
    }
}

export const logoutAction = () => {
    return dispatch => {
        dispatch({ type: SET_LOGOUT_USER })
        localStorage.clear()
        auth.signOut().then((result) => {

        })
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
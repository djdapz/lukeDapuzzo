
export const AUTHORIZE_USER = "AUTHORIZE_USER";
export const LOGIN_ACTION = "LOGIN_ACTION";
export const FAIL_LOGIN = "FAIL_LOGIN";



export function authorizeUser(user) {
    return {
        type: AUTHORIZE_USER,
        payload: {user}
    }
}
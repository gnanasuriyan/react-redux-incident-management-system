import { ActionTypePayload } from "../../app.type";
import { DO_LOGIN, DO_LOGIN_FAILURE, DO_LOGIN_SUCCESS } from "./constant";
import { UserCredentials } from "./user..type";

const doLogin = (credentials: UserCredentials): ActionTypePayload => {
    return {
        type: DO_LOGIN,
        payload: credentials
    };
};

const doLoginSuccess = (): ActionTypePayload => {
    return {
        type: DO_LOGIN_SUCCESS,
    };
}

const doLoginFailure = (): ActionTypePayload => {
    return {
        type: DO_LOGIN_FAILURE,
    };
};

export {
    doLogin,
    doLoginSuccess,
    doLoginFailure,
};

import { ActionTypePayload } from "../../app.type";
import { DO_LOGIN, DO_LOGIN_FAILED, DO_LOGIN_SUCCEED } from "./constants";
import { UserCredentials } from "./user..type";

const doLogin = (credentials: UserCredentials): ActionTypePayload => {
    return {
        type: DO_LOGIN,
        payload: credentials
    };
};

const doLoginSucceed = (userDetails: any): ActionTypePayload => {
    return {
        type: DO_LOGIN_SUCCEED,
        payload: userDetails
    };
}

const doLoginFailed = (err: any): ActionTypePayload => {
    return {
        type: DO_LOGIN_FAILED,
        error: err
    };
};

export {
    doLogin,
    doLoginSucceed,
    doLoginFailed,
};

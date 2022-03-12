import { ActionTypePayload } from "../../app.type";
import { CHECK_SESSION, CHECK_SESSION_FAILED, CHECK_SESSION_SUCCEED, UPDATE_SESSION} from "./constants";

const checkSession = (): ActionTypePayload => {
    return {
        type: CHECK_SESSION
    };
};


const checkSessionSucceed = (userDetails: any): ActionTypePayload => {
    return {
        type: CHECK_SESSION_SUCCEED,
        payload: userDetails
    };
};

const checkSessionFailed = (err: any): ActionTypePayload => {
    return {
        type: CHECK_SESSION_FAILED,
        payload: err
    };
};

const updateSession = (userDetails: any): ActionTypePayload => {
    return {
        type: UPDATE_SESSION,
        payload: userDetails
    };
};

export {
    checkSession,
    checkSessionSucceed,
    checkSessionFailed,
    updateSession
};

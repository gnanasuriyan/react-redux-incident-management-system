import { ActionTypePayload } from "../../app.type";
import { CHECK_SESSION, CHECK_SESSION_FAILED, CHECK_SESSION_SUCCEED} from "./constants";
import { UserDetails } from "./user.details.type";

// const showErrorMessage = (errorMessage: string): ActionTypePayload => {
//     return {
//         type: SHOW_ERROR,
//         payload: errorMessage
//     };
// };

// const loadUserDetails = (): ActionTypePayload => {
//     return {
//         type: LOAD_USER_DETAILS
//     };
// };

// const loadUserDetailsSucceed = (userDetails: UserDetails): ActionTypePayload => {
//     return {
//         type: LOAD_USER_DETAILS_SUCCESS,
//         payload: userDetails
//     };
// };

// const loadUserDetailsFailed = (err: any): ActionTypePayload => {
//     return {
//         type: LOAD_USER_DETAILS_FAILURE,
//         payload: err
//     };
// };

// const showHideLoader = (show: boolean): ActionTypePayload => {
//     return {
//         type: SHOW_HIDE_LOADER,
//         payload: show
//     };
// };

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

export {
    checkSession,
    checkSessionSucceed,
    checkSessionFailed
    // showErrorMessage,
    // loadUserDetails,
    // loadUserDetailsSucceed,
    // loadUserDetailsFailed,
    // showHideLoader
};

import { ActionTypePayload } from "../../app.type";
import { LOAD_INCIDENT_LIST, LOAD_INCIDENT_LIST_SUCCEED, LOAD_INCIDENT_LIST_FAILED} from "./constants";

const loadIncidentList = (): ActionTypePayload => {
    return {
        type: LOAD_INCIDENT_LIST
    };
};


const loadIncidentListSucceed = (incidentList: any): ActionTypePayload => {
    return {
        type: LOAD_INCIDENT_LIST_SUCCEED,
        payload: incidentList
    };
};

const loadIncidentListFailed = (err: any): ActionTypePayload => {
    return {
        type: LOAD_INCIDENT_LIST_FAILED,
        error: err
    };
};

export {
    loadIncidentList,
    loadIncidentListSucceed,
    loadIncidentListFailed
};

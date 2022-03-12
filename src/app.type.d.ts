export interface ActionTypePayload {
    type: string;
    payload?: any;
    error?: any;
}

export interface ResponseGenerator{
    config?:any,
    data?:any,
    headers?:any,
    request?:any,
    status?:number,
    statusText?:string
}

/**
 * Redux Action Creator
 * @param actionName Prefix for action
 */
export declare const createAction: <TriggerPayload = undefined, RequestPayload = undefined, SuccessPayload = undefined, FailurePayload = undefined, FulfillPayload = undefined>(actionName: string) => {
    (payload?: TriggerPayload | undefined): {
        type: string;
        payload: TriggerPayload | undefined;
    };
    TRIGGER: string;
    REQUEST: string;
    SUCCESS: string;
    FAILURE: string;
    FULFILL: string;
    trigger(payload?: TriggerPayload | undefined): {
        type: string;
        payload: TriggerPayload | undefined;
    };
    request(payload?: RequestPayload | undefined): {
        type: string;
        payload: RequestPayload | undefined;
    };
    success(payload?: SuccessPayload | undefined): {
        type: string;
        payload: SuccessPayload | undefined;
    };
    failure(payload?: FailurePayload | undefined): {
        type: string;
        payload: FailurePayload | undefined;
    };
    fulfill(payload?: FulfillPayload | undefined): {
        type: string;
        payload: FulfillPayload | undefined;
    };
};

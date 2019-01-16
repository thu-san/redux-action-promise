/**
 * Redux Action Creator
 * @param actionName Prefix for action
 */
export const createAction = <
  TriggerAction = undefined,
  TriggerPayload = undefined,
  SuccessAction = undefined,
  SuccessPayload = undefined,
  FailureAction = undefined,
  FailurePayload = undefined,
  FulfillAction = undefined,
  FulfillPayload = undefined,
  RequestAction = undefined,
  RequestPayload = undefined
>(
  actionName: string
) => {
  type action = {
    (payload: TriggerPayload): {
      type: TriggerAction;
      payload: TriggerPayload;
    };
    TRIGGER: TriggerAction;
    SUCCESS: SuccessAction;
    FAILURE: FailureAction;
    FULFILL: FulfillAction;
    REQUEST: RequestAction;
    trigger: (
      payload: TriggerPayload
    ) => {
      type: TriggerAction;
      payload: TriggerPayload;
    };
    success: (
      payload: SuccessPayload
    ) => {
      type: SuccessAction;
      payload: SuccessPayload;
    };
    failure: (
      payload: FailurePayload
    ) => {
      type: FailureAction;
      payload: FailurePayload;
    };
    fulfill: (
      payload: FulfillPayload
    ) => {
      type: FulfillAction;
      payload: FulfillPayload;
    };
    request: (
      payload: RequestPayload
    ) => {
      type: RequestAction;
      payload: RequestPayload;
    };
    /**
     * @property Property to retrieve type and assign in reducer action
     */
    actionTypes:
      | {
          type: TriggerAction;
          payload: TriggerPayload;
        }
      | {
          type: SuccessAction;
          payload: SuccessPayload;
        }
      | {
          type: FailureAction;
          payload: FailurePayload;
        }
      | {
          type: FulfillAction;
          payload: FulfillPayload;
        }
      | {
          type: RequestAction;
          payload: RequestPayload;
        };
  };

  const triggerAction: TriggerAction = (`${actionName}/TRIGGER` as unknown) as TriggerAction;

  const action: action = (payload: TriggerPayload) => ({
    type: triggerAction,
    payload
  });

  // action types
  action.TRIGGER = triggerAction;
  action.SUCCESS = (`${actionName}/SUCCESS` as unknown) as SuccessAction;
  action.FAILURE = (`${actionName}/FAILURE` as unknown) as FailureAction;
  action.FULFILL = (`${actionName}/FULFILL` as unknown) as FulfillAction;
  action.REQUEST = (`${actionName}/REQUEST` as unknown) as RequestAction;

  // actions
  action.trigger = (payload: TriggerPayload) => ({
    type: triggerAction,
    payload
  });
  action.success = (payload: SuccessPayload) => ({
    type: action.SUCCESS,
    payload
  });
  action.failure = (payload: FailurePayload) => ({
    type: action.FAILURE,
    payload
  });
  action.fulfill = (payload: FulfillPayload) => ({
    type: action.FULFILL,
    payload
  });
  action.request = (payload: RequestPayload) => ({
    type: action.REQUEST,
    payload
  });

  action.actionTypes = {
    type: triggerAction,
    payload: (undefined as unknown) as TriggerPayload
  };

  return action;
};

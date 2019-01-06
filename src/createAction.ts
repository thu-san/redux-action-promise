/**
 * Redux Action Creator
 * @param actionName Prefix for action
 */
export const createAction = <
  TriggerPayload = undefined,
  RequestPayload = undefined,
  SuccessPayload = undefined,
  FailurePayload = undefined,
  FulfillPayload = undefined
>(
  actionName: string
) => {
  const triggerAction = `${actionName}/TRIGGER`;

  const action = (payload?: TriggerPayload) => ({
    type: triggerAction,
    payload
  });

  // action types
  action.TRIGGER = triggerAction;
  action.REQUEST = `${actionName}/REQUEST`;
  action.SUCCESS = `${actionName}/SUCCESS`;
  action.FAILURE = `${actionName}/FAILURE`;
  action.FULFILL = `${actionName}/FULFILL`;

  // actions
  action.trigger = (payload?: TriggerPayload) => ({
    type: triggerAction,
    payload
  });
  action.request = (payload?: RequestPayload) => ({
    type: action.REQUEST,
    payload
  });
  action.success = (payload?: SuccessPayload) => ({
    type: action.SUCCESS,
    payload
  });
  action.failure = (payload?: FailurePayload) => ({
    type: action.FAILURE,
    payload
  });
  action.fulfill = (payload?: FulfillPayload) => ({
    type: action.FULFILL,
    payload
  });

  return action;
};

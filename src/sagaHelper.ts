import { call } from "redux-saga/effects";

export interface sagaPromiseHelper {
  type: string;
  payload: any;
  resolve: (param?: any) => {};
  reject: (e?: any) => {};
}

/**
 * Auto resolves and reject promise action passed from reduxActionPromiseMiddleware
 * @param innerSaga generatorFunction
 */
export const sagaPromiseHelper = (
  innerSaga: (param: sagaPromiseHelper["payload"]) => IterableIterator<any>
) =>
  function* innerFunction(action: sagaPromiseHelper) {
    try {
      const data = yield call(innerSaga, action.payload);
      if (action.resolve) {
        action.resolve(data);
      }
    } catch (e) {
      if (action.reject) {
        action.reject(e);
      }
    }
  };

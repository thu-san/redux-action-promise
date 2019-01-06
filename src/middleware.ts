import { sagaPromiseHelper } from "./sagaHelper";

/**
 * Middleware to wrap redux action with promise
 */
export const reduxActionPromiseMiddleware = () => (next: any) => (
  action: any
) =>
  new Promise((resolve, reject) => {
    const obj: sagaPromiseHelper = {
      ...action,
      resolve,
      reject
    };
    next(obj);
  });

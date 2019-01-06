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
export declare const sagaPromiseHelper: (innerSaga: (param: any) => IterableIterator<any>) => (action: sagaPromiseHelper) => IterableIterator<import("redux-saga/effects").CallEffect>;

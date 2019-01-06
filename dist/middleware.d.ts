/**
 * Middleware to wrap redux action with promise
 */
export declare const reduxActionPromiseMiddleware: () => (next: any) => (action: any) => Promise<{}>;

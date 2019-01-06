"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Middleware to wrap redux action with promise
 */
exports.reduxActionPromiseMiddleware = () => (next) => (action) => new Promise((resolve, reject) => {
    const obj = Object.assign({}, action, { resolve,
        reject });
    next(obj);
});

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const effects_1 = require("redux-saga/effects");
/**
 * Auto resolves and reject promise action passed from reduxActionPromiseMiddleware
 * @param innerSaga generatorFunction
 */
exports.sagaPromiseHelper = (innerSaga) => function* innerFunction(action) {
    try {
        const data = yield effects_1.call(innerSaga, action.payload);
        if (action.resolve) {
            action.resolve(data);
        }
    }
    catch (e) {
        if (action.reject) {
            action.reject(e);
        }
    }
};

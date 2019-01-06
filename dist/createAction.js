"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Redux Action Creator
 * @param actionName Prefix for action
 */
exports.createAction = (actionName) => {
    const triggerAction = `${actionName}/TRIGGER`;
    const action = (payload) => ({
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
    action.trigger = (payload) => ({
        type: triggerAction,
        payload
    });
    action.request = (payload) => ({
        type: action.REQUEST,
        payload
    });
    action.success = (payload) => ({
        type: action.SUCCESS,
        payload
    });
    action.failure = (payload) => ({
        type: action.FAILURE,
        payload
    });
    action.fulfill = (payload) => ({
        type: action.FULFILL,
        payload
    });
    return action;
};

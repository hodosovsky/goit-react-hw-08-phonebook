import { createAction } from '@reduxjs/toolkit';

export const getUsersPendingAction = createAction('users/getUsersPending');
export const getUsersFulfilledAction = createAction('users/getUsersFulfilled');
export const getUsersRejectedAction = createAction('users/getUsersRejected');

import { createSlice } from '@reduxjs/toolkit';
import usersJson from './users.json';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

export const mySlice = createSlice({
  name: 'contacts',
  initialState: {
    users: usersJson,
    filter: '',
  },
  reducers: {
    createUserAction(state, action) {
      state.users.unshift(action.payload);
    },
    deleteUserAction(state, action) {
      state.users = state.users.filter(item => item.name !== action.payload);
    },
    findUserAction(state, action) {
      state.filter = action.payload;
    },
  },
});

const persistConfig = {
  key: 'users',
  storage,
  whitelist: ['users', 'filter'],
};

export const contactsReducer = persistReducer(persistConfig, mySlice.reducer);

export const usersReducer = mySlice.reducer;

export const { createUserAction, deleteUserAction, findUserAction } =
  mySlice.actions;

export const getFilterValue = state => state.contacts.filter;
export const getConacts = state => state.contacts.users;

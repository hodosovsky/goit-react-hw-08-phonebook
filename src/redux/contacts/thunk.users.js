import axios from 'axios';

import { createAsyncThunk } from '@reduxjs/toolkit';

// import { getTasks } from './selectors';

export const getUsersThunk = createAsyncThunk(
  'users/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/contacts');
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addContactThunk = createAsyncThunk(
  'users/addContact',
  async (text, thunkAPI) => {
    try {
      const response = await axios.post('/contacts', text);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteContactsThunk = createAsyncThunk(
  'contacts/deleteContact',
  async (taskId, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${taskId}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

// export const getUsersThunk = () => async dispatch => {
//   dispatch(getUsersPendingAction());
//   try {
//     const users = await axios.get(
//       'https://6390725c65ff41831113d715.mockapi.io/contacts'
//     );
//     dispatch(getUsersFulfilledAction(users));
//   } catch (e) {
//     console.log(e);
//     dispatch(getUsersRejectedAction());
//   }
// };

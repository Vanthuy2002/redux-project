import userSlice from './userSlice';
import hobbySlice from './hobbySlice';
import postSlice from './postSlice';
import { configureStore, combineReducers } from '@reduxjs/toolkit';

const reducer = combineReducers({
  user: userSlice,
  hobby: hobbySlice,
  post: postSlice,
});

const store = configureStore({
  reducer,
});

export default store;

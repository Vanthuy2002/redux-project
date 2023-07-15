import { configureStore, combineReducers } from '@reduxjs/toolkit';
import userSlice from './userSlice';
import hobbySlice from './hobbySlice';

const reducer = combineReducers({
  user: userSlice,
  hobby: hobbySlice,
});

const store = configureStore({
  reducer,
});

export default store;

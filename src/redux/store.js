import userSlice from './userSlice';
import hobbySlice from './hobbySlice';
import { configureStore, combineReducers } from '@reduxjs/toolkit';

const reducer = combineReducers({
  user: userSlice,
  hobby: hobbySlice,
});

const store = configureStore({
  reducer,
});

export default store;

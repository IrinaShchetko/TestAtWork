import { configureStore } from '@reduxjs/toolkit';
import fetchReducer from './users/slice';

export default configureStore({
  reducer: {
    fetch: fetchReducer,
  },
});

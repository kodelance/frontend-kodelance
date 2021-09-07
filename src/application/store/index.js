import { configureStore } from '@reduxjs/toolkit';
import { counterReducer, themeReducer } from './slice';

export default configureStore({
  reducer: {
    counter: counterReducer,
    theme: themeReducer,
  },
});

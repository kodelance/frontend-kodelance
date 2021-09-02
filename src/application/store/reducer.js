import { createSlice } from '@reduxjs/toolkit';
import { models } from '../models';
const { reducer, state } = models;
/**
 * a slice redux made from models folder
 * for making redux store
 */
const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
  },
  reducers: { ...reducer.counter },
});

export const { add, substract } = counterSlice.actions;
export default counterSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';
import models from '../models';
const { reducer } = models;

/**
 * a slice redux made from models folder
 * for making redux store
 * @returns Slice Object
 */

const counterSlice = createSlice({
  name: reducer[0].name,
  initialState: {
    ...reducer[0].state,
  },
  reducers: {
    ...reducer[0].functions,
  },
});

export const { add, substract } = counterSlice.actions;
export default counterSlice.reducer;

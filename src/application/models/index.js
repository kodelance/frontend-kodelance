import { normalTheme } from '../common';

const models = {
  reducer: [
    {
      state: {
        value: 0,
      },
      name: 'counter',
      functions: {
        add(state) {
          state.value += 1;
        },
        substract(state) {
          state.value -= 1;
        },
        addByValue(state, action) {
          state.value += action.payload;
        },
      },
    },
    {
      state: {
        theme: normalTheme,
      },
      name: 'theme',
      functions: {
        changeTheme(state, action) {
          state.theme = action.payload;
        },
      },
    },
  ],
};

export default models;

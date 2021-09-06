/**
 * an entity for state management
 * @returns json
 */

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
  ],
};

export default models;

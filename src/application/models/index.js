export const models = {
  state: {
    value: 0,
  },
  reducer: {
    counter: {
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
};

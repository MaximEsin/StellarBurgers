import { createStore } from 'redux';

const getInitialData = (state = { initialData: [] }, action) => {
  if (action.type === 'STORE_DATA') {
    state.initialData = action.data;
    return { initialData: state.initialData };
  }
  return state;
};

const store = createStore(getInitialData);

export default store;

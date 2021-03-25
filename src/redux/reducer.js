import { createReducer, combineReducers } from '@reduxjs/toolkit';
import { increment, decrement } from './actions';

const value = createReducer(10, {
  [increment]: (state, { payload }) => state + payload,
  [decrement]: (state, { payload }) => state - payload,
});

const step = (state = 1, action) => state;

// const reducer = (state = initialState, { type, payload }) => {
//   switch (type) {
//     case 'counter/Increment':
//       return {
//         ...state,
//         counter: {
//           ...state.counter,
//           value: state.counter.value + payload,
//         },
//       };
//     case 'counter/Decrement':
//       return {
//         ...state,
//         counter: {
//           ...state.counter,
//           value: state.counter.value - payload,
//         },
//       };
//     default:
//       return state;
//   }
// };
export default combineReducers({
  value,
  step,
});

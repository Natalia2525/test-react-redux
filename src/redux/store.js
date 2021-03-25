// import { createStore } from 'redux';
import reducer from './reducer';
// import { devToolsEnhancer } from 'redux-devtools-extension';
import { configureStore } from '@reduxjs/toolkit';

// const store = createStore(reducer, devToolsEnhancer());

const store = configureStore({ reducer });
export default store;

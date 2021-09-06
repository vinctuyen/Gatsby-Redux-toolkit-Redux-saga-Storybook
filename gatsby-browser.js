import React from 'react';
import { Provider } from 'react-redux';
import store from './src/store/index';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

export const wrapRootElement = ({ element }) => {
  return <Provider store={store}>{element}</Provider>;
};

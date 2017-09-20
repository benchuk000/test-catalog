import { combineReducers } from 'redux';

import products from './products'
import checkboxs from './checkboxs'
import subpages from './subpages'

const rootReducer = combineReducers({
  products,
  checkboxs,
  subpages
});

export default rootReducer;
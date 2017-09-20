import { createStore} from 'redux';
import rootReducer from '../Reducers/rootReducer';


const defaultState = {
    products: [],
    checkboxs: {
      men: true,
      women: true,
      children: true,
    },
    subpages:{
      men: 1,
      women: 1,
      children: 1
    }
};

const generateStore = (initialState = defaultState) =>
    createStore(rootReducer, initialState);

export default generateStore;
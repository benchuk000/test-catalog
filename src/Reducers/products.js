import * as types from '../actionTypes/actionTypes';

const products = (state = [], action) => {
    switch (action.type) {
        case types.SET_PRODUCTS:
            return action.data.map((item,index) => {
                return Object.assign({},item);
            })
        default:
            return state;
    }
}

export default products;
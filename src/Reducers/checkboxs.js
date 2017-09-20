import * as types from '../actionTypes/actionTypes';

const checkboxs = (state = {}, action) => {
    switch (action.type) {
        case types.TOGGLE_MEN_CHECKBOX:
            return {
              ...state,
             men: !state.men
            }
        case types.TOGGLE_WOMEN_CHECKBOX:
            return {
              ...state,
              women: !state.women
            }
        case types.TOGGLE_CHILDREN_CHECKBOX:
            return {
              ...state,
              children: !state.children
            }
        case types.CLICK_BUTTON_SEE_ALL:
            return {
              ...state,
              men: true,
              women: true,
              children: true
            }
        default:
            return state;
    }
}

export default checkboxs;
import * as types from '../actionTypes/actionTypes';

const subpages  = (state = {}, action) => {
  switch (action.type) {
      case types.TO_NEXT_SUBPAGE:
          return {
            ...state,
            [action.category]: ++state[action.category]
          }
      case types.TO_PREV_SUBPAGE:
          return {
            ...state,
            [action.category]: --state[action.category]
          }
      default:
          return state;
  }
}

export default subpages;
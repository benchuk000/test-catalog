import * as types from '../actionTypes/actionTypes';

export const setProducts = data => ({
  type: types.SET_PRODUCTS,
  data
});
export const toggleMenCheckbox = () => ({
  type: types.TOGGLE_MEN_CHECKBOX,
  
});
export const toggleWomenCheckbox = () => ({
  type: types.TOGGLE_WOMEN_CHECKBOX,
  
});
export const toggleChildrenCheckbox = () => ({
  type: types.TOGGLE_CHILDREN_CHECKBOX,
  
});

export const clickButtonSeeAll = () => ({
  type: types.CLICK_BUTTON_SEE_ALL,
  
});
export const toNextSubpage = category => ({
  type: types.TO_NEXT_SUBPAGE,
  category
});

export const toPrevSubpage = category => ({
  type: types.TO_PREV_SUBPAGE,
  category
});

export const sortByPrice = () => ({
  type: types.SORT_BY_PRICE,
 
});

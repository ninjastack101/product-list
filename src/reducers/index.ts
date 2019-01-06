import { AnyAction } from "redux";
import { ADD_LIST_ITEM } from "../actions/actionTypes";
import { IAppReducerState } from '../types';

export const initialState: IAppReducerState = {
  items: []
};

const reducer = (state = initialState, action: AnyAction) => {
  switch(action.type) {
    case ADD_LIST_ITEM:
      return {
        ...state,
        items: [
          ...state.items,
          action.item,
        ],
      };

    default:
      return state;
  }
};

export default reducer;

import { AnyAction } from "redux";
import { IAppReducerState } from '../types';
import {
  FETCH_PRODUCTS_LIST_FAILURE,
  FETCH_PRODUCTS_LIST_REQUEST,
  FETCH_PRODUCTS_LIST_SUCCESS,
} from '../actions/actionTypes';

export const initialState: IAppReducerState = {
  products: {
    error: undefined,
    values: [],
    isLoading: false,
  },
};

const reducer = (state = initialState, action: AnyAction) => {
  switch(action.type) {
    case FETCH_PRODUCTS_LIST_REQUEST:
      return {
        ...state,
        products: {
          ...state.products,
          isLoading: true,
          values: [],
          error: undefined,
        },
      };

    case FETCH_PRODUCTS_LIST_SUCCESS:
      return {
        ...state,
        products: {
          ...state.products,
          isLoading: false,
          values: action.data.results,
          error: undefined,
        },
      };

    case FETCH_PRODUCTS_LIST_FAILURE:
      return {
        ...state,
        products: {
          ...state.products,
          isLoading: false,
          values: [],
          error: action.error,
        },
      };

    default:
      return state;
  }
};

export default reducer;

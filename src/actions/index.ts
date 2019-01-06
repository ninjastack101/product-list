import {
  CALL_API,
  FETCH_PRODUCTS_LIST_FAILURE,
  FETCH_PRODUCTS_LIST_REQUEST,
  FETCH_PRODUCTS_LIST_SUCCESS,
} from './actionTypes';

export const fetchProducts = () => ({
  type: CALL_API,
  types: [
    FETCH_PRODUCTS_LIST_REQUEST,
    FETCH_PRODUCTS_LIST_SUCCESS,
    FETCH_PRODUCTS_LIST_FAILURE,
  ],
  method: 'get',
  endPoint: 'sites/MLA/search?q=book&limit=30#json',
});

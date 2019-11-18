import configureStore from 'redux-mock-store';
import { fetchProducts } from './index';
import { CALL_API } from './actionTypes';
import * as actions from './actionTypes';

const mockStore = configureStore();
const store = mockStore();

describe('fetchProducts', () => {

  beforeEach(() => {
    store.clearActions();
  });

  it('should dispatch the fetch products action', (done) => {

    const expectedActions = [
      {
        type: CALL_API,
        types: [
          actions.FETCH_PRODUCTS_LIST_REQUEST,
          actions.FETCH_PRODUCTS_LIST_SUCCESS,
          actions.FETCH_PRODUCTS_LIST_FAILURE,
        ],
        method: 'get',
        endPoint: 'sites/MLA/search?q=book&limit=30#json',
      }
    ];
    store.dispatch(fetchProducts());
    expect(store.getActions()).toEqual(expectedActions);
    done();
  });

  it('should dispatch the fetch products without dispatch action', (done) => {

    const expectedActions = {
      type: CALL_API,
      types: [
        actions.FETCH_PRODUCTS_LIST_REQUEST,
        actions.FETCH_PRODUCTS_LIST_SUCCESS,
        actions.FETCH_PRODUCTS_LIST_FAILURE,
      ],
      method: 'get',
      endPoint: 'sites/MLA/search?q=book&limit=30#json'
    };
    expect(fetchProducts()).toEqual(expectedActions);
    done();
  });
});

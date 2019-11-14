import configureStore from 'redux-mock-store';
import { fetchProducts } from './index';
import { CALL_API } from './actionTypes';
import * as actions from './actionTypes';

const mockStore = configureStore();
const reduxStore = mockStore();

describe('fetchProducts', () => {

  beforeEach(() => {
    reduxStore.clearActions();
  });

  it('should dispatch the fetch products action', done => {
    const expectedActions = [
      {
        type: CALL_API,
        types: [
          actions.FETCH_PRODUCTS_LIST_REQUEST,
          actions.FETCH_PRODUCTS_LIST_SUCCESS,
          actions.FETCH_PRODUCTS_LIST_FAILURE
        ],
        method: 'get',
        endPoint: 'sites/MLA/search?q=book&limit=30#json'
      }
    ]
    reduxStore.dispatch(fetchProducts());
    expect(reduxStore.getActions()).toEqual(expectedActions);
    done()
  });
});

import * as actions from '../actions/actionTypes';
import { IAppReducerState } from '../types';
import reducer from './index';

describe('fetchProducts', () => {

  let initialState: IAppReducerState = {
    products: {
      error: undefined,
      values: [],
      isLoading: false,
    },
  };

  it('should return the initial state', done => {
    const initAction: any = {};
    expect(reducer(undefined, initAction)).toEqual(initialState);
    done();
  });

  it('should handle FETCH_PRODUCTS_LIST_REQUEST', done => {

    const startAction = {
      type: actions.FETCH_PRODUCTS_LIST_REQUEST,
    }

    const expectObj = {
      products: {
        isLoading: true,
        values: [],
        error: undefined,
      },
    };
    expect(reducer(initialState, startAction)).toEqual(expectObj);
    done();
  });

  it('should handle FETCH_PRODUCTS_LIST_SUCCESS', done => {

    const actionSuccess = {
      type: actions.FETCH_PRODUCTS_LIST_SUCCESS,
      data: {
        results: {
          id: "category",
          name: "Categories",
          type: "text"
        },
      },
    };

    const expectObj = {
      products: {
        isLoading: false,
        values: actionSuccess.data.results,
        error: undefined,
      },
    };
    expect(reducer(initialState, actionSuccess)).toEqual(expectObj);
    done();
  });

  it('should handle FETCH_PRODUCTS_LIST_FAILURE', done => {

    const failAction = {
      type: actions.FETCH_PRODUCTS_LIST_FAILURE,
      error: 'unable to fetch product list'
    }

    const expectObj = {
      products: {
        isLoading: false,
        values: [],
        error: failAction.error,
      },
    };
    expect(reducer(initialState, failAction)).toEqual(expectObj);
    done();
  });
});

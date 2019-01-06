import { AnyAction } from "redux";
import { IAppReducerState } from '../types';

export const initialState: IAppReducerState = {};

const reducer = (state = initialState, action: AnyAction) => {
  switch(action.type) {
    default:
      return state;
  }
};

export default reducer;

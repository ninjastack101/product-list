import { createSelector } from 'reselect'
import { IApplicationRootState } from '../types';

export const selectApp = (state: IApplicationRootState) => state.app

export const selectProducts = createSelector(
  selectApp,
  app => app.products.values,
);

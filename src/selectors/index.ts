import { createSelector } from 'reselect'
import { IApplicationRootState } from '../types';

export const selectApp = (state: IApplicationRootState) => state.app

export const selectItems = createSelector(
  selectApp,
  app => app.items,
);

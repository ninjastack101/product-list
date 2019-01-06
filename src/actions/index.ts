import { ADD_LIST_ITEM } from "./actionTypes";
import { IItem } from '../types';

export const addListItem = (item: IItem) => ({
  type: ADD_LIST_ITEM,
  item,
});

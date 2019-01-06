
// List Item type
export interface IItem {
  key: string;
  label: string;
};

// Application Reducer state type
interface IAppReducerState {
  items: IItem[];
};


// List Item type
export interface IItem {
  key: string;
  label: string;
};

// Application Reducer state type
export interface IAppReducerState {
  items: IItem[];
};

// Application Root State
export interface IApplicationRootState {
  readonly app: IAppReducerState;
}

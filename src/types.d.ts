
export interface IProducts {

};

export interface IProducts {
  values: IProduct[],
  error: any;
  isLoading: boolean;
};

// Application Reducer state type
export interface IAppReducerState {
  products: IProducts;
};

// Application Root State
export interface IApplicationRootState {
  readonly app: IAppReducerState;
}

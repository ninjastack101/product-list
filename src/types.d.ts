
export interface IProduct {
  id: string;
  title: string;
  currency_id: string;
  price: number;
  available_quantity: number;
  sold_quantity: number;
  thumbnail: string;
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

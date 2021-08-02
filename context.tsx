import * as React from 'react';
import { createContext } from 'react';
import {
  productReducer,
  shoppingCartReducer,
  ProductActions,
  ShoppingCartActions
} from './reducers';

let nextId: number = 0;
type Product = {
  id: number;
  name: string;
  price: number;
};

type Cart = {
  products: Product[];
  shoppingCart: number;
};

type InitialStateType = Cart;

const initialState = {
  products: [],
  shoppingCart: 0
};

const AppContext = createContext<{
  state: InitialStateType;
  dispatch: React.Dispatch<ProductActions | ShoppingCartActions>;
}>({
  state: initialState,
  dispatch: () => null
});

const mainReducer = (
  { products, shoppingCart }: InitialStateType,
  action: ProductActions | ShoppingCartActions
) => ({
  products: productReducer(products, action),
  shoppingCart: shoppingCartReducer(shoppingCart, action)
});

const AppProvider: React.FC = ({ children }) => {
  const [state, dispatch] = React.useReducer(mainReducer, initialState);
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider, Product, Cart, nextId };

import { Cart, Product } from './context';

type ActionMap<M extends { [index: string]: any }> = {
  [Key in keyof M]: M[Key] extends undefined
    ? {
        type: Key;
      }
    : {
        type: Key;
        payload: M[Key];
      }
};

export enum Types {
  CREATE = 'CREATE_PRODUCT',
  DELETE = 'DELETE_PRODUCT',
  ADD = 'ADD_PRODUCT'
}

type ProductPayload = {
  [Types.CREATE]: { id: number; name: string; price: number };
  [Types.DELETE]: { id: number };
};

type ShoppingCartPayload = {
  [Types.ADD]: undefined;
};

export type ProductActions = ActionMap<ProductPayload>[keyof ActionMap<
  ProductPayload
>];

export const productReducer = (
  state: Product[],
  action: ProductActions | ShoppingCartActions
) => {
  switch (action.type) {
    case 'CREATE_PRODUCT':
      return [
        ...state,
        {
          id: action.payload.id,
          name: action.payload.name,
          price: action.payload.price
        }
      ];
    case 'DELETE_PRODUCT':
      return [...state.filter(product => product.id !== action.payload.id)];
    default:
      return state;
  }
};

export type ShoppingCartActions = ActionMap<
  ShoppingCartPayload
>[keyof ActionMap<ShoppingCartPayload>];

export const shoppingCartReducer = (
  state: number,
  action: ProductActions | ShoppingCartActions
) => {
  switch (action.type) {
    case 'ADD_PRODUCT':
      return state + 1;
    default:
      return state;
  }
};

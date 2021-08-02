import * as React from 'react';
import { useContext } from 'react';
import { AppContext } from './context';
import { Types } from './reducers';

const Products: React.FC = () => {
  const { state, dispatch } = useContext(AppContext);
  console.log(state.products);
  return (
    <div>
      <ul>
        {state.products &&
          state.products.map(p => (
            <li>
              {p.name} - ${p.price}{' '}
              <button
                onClick={() => {
                  dispatch({
                    type: Types.ADD
                  });
                }}
              >
                {' '}
                Add to Cart{' '}
              </button>
              <button
                onClick={() => {
                  dispatch({
                    type: Types.DELETE,
                    payload: {
                      id: p.id
                    }
                  });
                }}
              >
                Delete{' '}
              </button>
            </li>
          ))}
      </ul>
      Shopping Cart Items: {state.shoppingCart}
    </div>
  );
};

export { Products };

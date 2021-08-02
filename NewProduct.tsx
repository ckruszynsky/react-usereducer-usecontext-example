import * as React from 'react';
import { useContext } from 'react';
import { AppContext, Product } from './context';
import { Types } from './reducers';

const NewProduct: React.FC<{
  onProductAdded: () => void;
}> = ({ onProductAdded }) => {
  const { state, dispatch } = useContext(AppContext);
  const [newProduct, setNewProduct] = React.useState({
    name: 'New Product',
    price: 0,
    id: -1
  });

  const onProductNameChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewProduct({ ...newProduct, name: e.currentTarget.value });
  };

  const onProductPriceChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewProduct({ ...newProduct, price: Number(e.currentTarget.value) });
  };

  const onAddProductClicked = () => {
    dispatch({
      type: Types.CREATE,
      payload: {
        id: newProduct.id,
        name: newProduct.name,
        price: newProduct.price
      }
    });

    onProductAdded();
  };

  const onCancelClicked = () => {
    onProductAdded();
  };

  return (
    <form>
      <div>
        <label>Name: </label>
        <input
          type="text"
          value={newProduct.name}
          onChange={onProductNameChanged}
        />
      </div>
      <div>
        <label>Price:</label>
        <input
          type="number"
          value={newProduct.price}
          onChange={onProductPriceChanged}
        />
      </div>
      <div>
        <button onClick={onAddProductClicked}>Add Product</button>
        <button onClick={onCancelClicked}>Cancel</button>
      </div>
    </form>
  );
};

export { NewProduct };

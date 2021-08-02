import * as React from 'react';
import { render } from 'react-dom';
import { AppProvider } from './context';
import Hello from './Hello';
import { NewProduct } from './NewProduct';
import { Products } from './Products';
import './style.css';

const App: React.FC = () => {
  const [addNewProduct, setAddNewProduct] = React.useState(false);
  const onProductAdded = () => {
    setAddNewProduct(false);
  };
  return (
    <AppProvider>
      <div>
        <button onClick={e => setAddNewProduct(true)}>Add New Product</button>
      </div>
      {addNewProduct && <NewProduct onProductAdded={onProductAdded} />}
      {!addNewProduct && <Products />}
    </AppProvider>
  );
};
render(<App />, document.getElementById('root'));

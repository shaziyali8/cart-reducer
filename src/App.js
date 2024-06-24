import Header from './components/Header';
import Shop from './components/Shop';
import { DUMMY_PRODUCTS } from './dummy-products';
import Product from './components/Product';
import CartCnxtProvider from './store/shoppingCart-contextAPI';


function App() {
  return (
    <CartCnxtProvider>
      <Header />
      <Shop>
        {DUMMY_PRODUCTS.map((product) => (
          <li key={product.id}>
            <Product {...product} />
          </li>
        ))}
      </Shop>
    </CartCnxtProvider>
  );
}

export default App;

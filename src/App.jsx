import { useState } from "react";
import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCard";
import Cart from "./components/Cart";
import products from "./data/products";
import './index.css';

function App() {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div>
      <Navbar cartCount={cart.length} />
      <div className="product-list">
        {products.map(p => (
          <ProductCard key={p.id} product={p} onAdd={handleAddToCart} />
        ))}
      </div>
      <Cart cartItems={cart} />
    </div>
  );
}

export default App;

import React, { useState } from "react";
import { Route } from "react-router-dom";
import data from "./data";

// Components
import Navigation from "./components/Navigation";
import Products from "./components/Products";
import ShoppingCart from "./components/ShoppingCart";
import ProductContext from "./contexts/products";
import CartContext from "./contexts/cart";
import useLocalStorage from "./hooks/useLocalStorage";

function App() {
  const [products] = useState(data);
  const [storedCart, setStoredCart] = useLocalStorage("cart", []);
  const [cart, setCart] = useState(storedCart);

  const addItem = item => {
    setCart(current => {
      const newCart = [...current, item];

      setStoredCart(newCart);

      return newCart;
    });
  };

  const removeItem = id => {
    setCart(current => {
      const newCart = current.filter(
        item => Number(id) !== Number(item.id),
      );

      setStoredCart(newCart);

      return newCart;
    });
  };

  return (
    <ProductContext.Provider
      value={{ products, addItem, removeItem }}
    >
      <CartContext.Provider value={cart}>
        <div className="App">
          <Navigation />

          {/* Routes */}
          <Route exact path="/" component={Products} />

          <Route path="/cart" component={ShoppingCart} />
        </div>
      </CartContext.Provider>
    </ProductContext.Provider>
  );
}

export default App;

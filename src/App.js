import React, { useState } from "react";
import { Route } from "react-router-dom";
import data from "./data";

// Components
import Navigation from "./components/Navigation";
import Products from "./components/Products";
import ShoppingCart from "./components/ShoppingCart";
import ProductContext from "./contexts/products";
import CartContext from "./contexts/cart";

function App() {
  const [products] = useState(data);
  const [cart, setCart] = useState([]);

  const addItem = item => {
    setCart(current => [...current, item]);
  };

  const removeItem = id => {
    setCart(current =>
      current.filter(item => Number(id) !== Number(item.id)),
    );
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

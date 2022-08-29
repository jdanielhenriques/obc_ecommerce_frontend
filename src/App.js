import React, { useState } from "react";
import "./App.css";
import Products from "./components/cards/products/Products";
import Navbar from "./components/navbar/Navbar";
import Cart from "./components/cart/Cart";

const PAGE_PRODUCTS = "products";
const PAGE_CART = "cart";

function App() {
  const [cart, setCart] = useState([]);
  const [page, setPage] = useState(PAGE_PRODUCTS);

  const navigateTo = (nextPage) => {
    setPage(nextPage);
  };

  const getCartTotal = () => {
    return cart.reduce((sum, { quantity }) => sum + quantity, 0);
  };
  const addToCart = (product) => {
    let newCart = [...cart];
    let itemInCart = newCart.find(
      (item) => product.product_name === item.product_name
    );
    if (itemInCart) {
      itemInCart.quantity++;
    } else {
      itemInCart = {
        ...product,
        quantity: 1,
      };
      newCart.push(itemInCart);
    }
    setCart(newCart);
  };
  return (
    <div className="App">
      <Navbar navigateTo={navigateTo} />
      {page === PAGE_PRODUCTS && <Products
       cart={cart} 
       setCart={setCart}
       addToCart={addToCart} />}
      {page === PAGE_CART && <Cart cart={cart} setCart={setCart} />}
      
    </div>
  );
}

export default App;

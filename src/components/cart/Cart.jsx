import React from "react";
import Product from "../cards/products/Product";
export default function Cart({ cart, setCart }) {
  const getTotalSum = () => {
    return cart.reduce(
      (sum, { product_price, quantity }) => sum + product_price * quantity,
      0
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const setQuantity = (product, amount) => {
    const newCart = [...cart];
    newCart.find((item) => item.name === product.name).quantity = amount;
    setCart(newCart);
  };

  const removeFromCart = (productToRemove) => {
    setCart(cart.filter((product) => product !== productToRemove));
  };


  return (
    <>
      <h1>Carrinho</h1>
      {cart.length > 0 && <button onClick={clearCart}>Limpar carrinho</button>}
      <div className="flex">
        {cart.map((product) => (
          <div key={product.idProducts}>
            <Product
              product_idProducts={product.idProducts}
              product_name={product.product_name}
              product_description={product.product_description}
              product_price={product.product_price}
            />
            <input
              type="number"
              min="1"
              value={product.quantity}
              onChange={(e) => setQuantity(product, parseInt(e.target.value))}
            />
            <button onClick={() => removeFromCart(product)}>Remove</button>
          </div>
        ))}
      </div>
      <div>Total: R${getTotalSum()}</div>
    </>
  );
}

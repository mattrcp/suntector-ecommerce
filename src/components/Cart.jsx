// Cart.jsx
import React from "react";

const Cart = ({ cartItems, removeFromCart }) => {
  // Calculate total price
  const totalPrice = cartItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <div>
      {cartItems.map((item, index) => (
        <div key={index + 1}>
          <p>{item.name}</p>
          <p>{item.price}</p>
          {/* Add a button to remove the product from the cart */}
          <button onClick={() => removeFromCart(item)}>Remove</button>
        </div>
      ))}
      <p>Total Price: {totalPrice}</p>
    </div>
  );
};

export default Cart;

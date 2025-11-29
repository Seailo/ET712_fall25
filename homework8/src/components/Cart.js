import React from "react";

function Cart({ cart, removeFromCart }) {
  const total = cart.reduce((t, item) => t + item.price, 0);

  return (
    <div>
      <h2 className="page-title">Your Cart</h2>

      {cart.length === 0 && <p>Your cart is empty.</p>}

      {cart.map(item => (
        <div className="cart-item" key={item.id}>
          <img src={item.image} alt="" className="cart-img" />

          <div className="cart-info">
            <h3>{item.name}</h3>
            <p>${item.price.toFixed(2)}</p>
          </div>

          <button className="btn-remove" onClick={() => removeFromCart(item.id)}>
            Remove
          </button>
        </div>
      ))}

      {cart.length > 0 && (
        <h3 className="cart-total">Total: ${total.toFixed(2)}</h3>
      )}
    </div>
  );
}

export default Cart;

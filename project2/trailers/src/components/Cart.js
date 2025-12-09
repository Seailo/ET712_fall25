import React from "react";
import "../App.css";

const Cart = ({ cart, removeFromCart }) => {
  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <>
      <h2 className="carttitle">Your Shopping Cart</h2>

      {cart.length === 0 && <p className="emptymsg">Your cart is empty.</p>}

      <section className="cartcontainer">
        {cart.map((item) => (
          <div key={item.id} className="itemcart">
            <img className="cartitemimg" src={item.image} alt={item.name} />
            <p className="cartitemname">{item.name}</p>
            <p className="cartitemprice">${item.price.toFixed(2)}</p>
            <p className="cartitemquantity">{item.qty}</p>
            <p className="cartitemtotal">
              ${(item.price * item.qty).toFixed(2)}
            </p>
            <button
              className="btncartremove"
              onClick={() => removeFromCart(item.id)}
            >
              ❌ Remove
            </button>
          </div>
        ))}

        {cart.length > 0 && (
          <p className="totalcart">
            Total $ {total.toFixed(2)}
          </p>
        )}
      </section>
    </>
  );
};

export default Cart;

import React from "react";
import "../style/Cart.css";
import { useSelector, useDispatch } from "react-redux";
import { CartActions } from "../store/cart-slice";

export default function Cart() {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (id) => {
    dispatch(CartActions.removeItemFromCart(id));
  };

  return (
    <div className="cart">
      {cartItems.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        cartItems.map((p) => (
          <div key={p.id} className="cart-item">
            <h4>{p.name}</h4>
            <p>Price: {p.price}$</p>
            <p>Quantity: {p.quantity}</p>
            <p>Total: {p.totalPrice}$</p>
            <button onClick={() => handleRemoveFromCart(p.id)}>Remove</button>
          </div>
        ))
      )}
    </div>
  );
}

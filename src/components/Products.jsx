import React from "react";
import "../style/Products.css";
import { useDispatch } from "react-redux";
import { CartActions } from "../store/cart-slice";

export default function Products() {
  const Products_data = [
    { id: 1, price: 100, title: "prod_1" },
    { id: 2, price: 150, title: "prod_2" },
    { id: 3, price: 170, title: "prod_3" },
    { id: 4, price: 325, title: "prod_4" },
  ];

  const dispatch = useDispatch();

  const HandleAddToCart = (product) => {
    dispatch(CartActions.addItemToCart(product)); // Pass product data
  };

  return (
    <div className="products">
      {Products_data.map((p) => (
        <div className="prod" key={p.id}>
          <h3>{p.title}</h3>
          <span>{p.price}$</span>
          <button onClick={() => HandleAddToCart(p)}>Add To Cart</button>
        </div>
      ))}
    </div>
  );
}

import React, { useEffect, useState } from "react";
import "../style/Products.css";
import { useDispatch } from "react-redux";
import { CartActions } from "../store/cart-slice";

export default function Products() {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  const handleAddToCart = (product) => {
    dispatch(
      CartActions.addItemToCart({
        id: product.id,
        price: product.price,
        title: product.title,
      })
    );
  };

  return (
    <div className="products">
      {products.length === 0 ? (
        <p>Loading products...</p>
      ) : (
        products.map((p) => (
          <div className="prod" key={p.id}>
            <h3>{p.title}</h3>
            <span>{p.price}$</span>
            <button onClick={() => handleAddToCart(p)}>Add To Cart</button>
          </div>
        ))
      )}
    </div>
  );
}

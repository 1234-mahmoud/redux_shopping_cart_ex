import React from "react";
import "../style/Header.css";
import { useDispatch,useSelector } from "react-redux";
import { uiActions } from "../store/ui-slice";
export default function Header() {
  const dispatch = useDispatch();
  const handleShowCart = () => {
    dispatch(uiActions.toggle());
  };
  const quantity= useSelector((state) => state.cart.totalQuantity)
  return (
    <div className="header">
      <button onClick={handleShowCart}>Show Cart</button>
      <span>count:{quantity}</span>
    </div>
  );
}

import React from "react";
import "./Order.css";
import OrderForm from "../../components/Form/FormAdress/OrderForm";
import FormCart from "../../components/Form/FormCart/FormCart";
import { useLocation } from "react-router-dom";

export default function Order() {
  const { state } = useLocation();
  return (
    <div className="cointener">
      <div className="order-container">
        <FormCart />
        <OrderForm />
      </div>
      <div className="cartCardsContainer">
        <h1 className="korpa"> Your cart</h1>
        <h1 className="korpa-k">
          Total price in your cart:{"   "}
          {state.totalPrice}
          {"EUR"}
        </h1>
      </div>
    </div>
  );
}

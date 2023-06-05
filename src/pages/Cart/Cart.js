import React from "react";
import { useContext } from "react";
import IconButton from "@mui/material/IconButton";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { AppContext } from "../../context/AppContext";
import CartCards from "../../components/CartCards/CartCards";
import "./Cart.css";
import { useNavigate } from "react-router-dom";

export default function Cart() {
  const navigation = useNavigate();
  const { products, cart } = useContext(AppContext);
  const totalPrice = cart.reduce((prev, curr) => {
    const product = products.find((p) => p.id === curr.id);
    if (product.quantity > 20) {
      return (
        prev +
        (curr.price - (curr.price * curr.discountPercentage) / 100) *
          curr.quantityInCart
      );
    } else {
      return prev + curr.price * curr.quantityInCart;
    }
  }, 0);

  return (
    <>
      {cart.length !== 0 ? (
        <div className="cartCards">
          <div className="cartCardsContainer">
            <h1 className="korpa"> Your cart</h1>
            <h1 className="korpa-k">
              Total price in your cart:{"   "}
              {totalPrice}
              {"EUR"}
            </h1>
          </div>
          {cart.map((product) => (
            <CartCards
              key={product.id}
              id={product.id}
              productImage={product.imageURL}
              productName={product.title}
              productPrice={
                product.quantity > 20
                  ? product.price -
                    (product.price * product.discountPercentage) / 100
                  : product.price
              }
              quantity={product.quantityInCart}
            />
          ))}
          <p
            className="korpa-k"
            style={{ margin: "20px auto", cursor: "pointer", width: "200px" }}
            onClick={() =>
              navigation("/order", {
                state: {
                  totalPrice,
                },
              })
            }
          >
            BUY NOW
          </p>
        </div>
      ) : (
        <div>
          <div
            style={{
              height: "70vh",
              backgroundImage: `url("https://www.adasglobal.com/img/empty-cart.png")`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "50vw",
            }}
          ></div>
          <IconButton
            style={{
              marginTop: "-40px",
              backgroundColor: "green",
              borderRadius: "5px",
            }}
            color=""
            aria-label="add to shopping cart"
          >
            <a
              style={{
                color: "#ffffff",
                textDecoration: "none",
                fontWeight: "700",
              }}
              href="products"
            >
              Go shopping
            </a>
            <AddShoppingCartIcon />
          </IconButton>
        </div>
      )}
    </>
  );
}

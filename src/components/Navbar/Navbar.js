import React, { useContext } from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
// import logo from "../../assets/images/logo.png";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { AppContext } from "../../context/AppContext";

export default function Navbar() {
  const { cart } = useContext(AppContext);

  return (
    <header className="navbar">
      <NavLink to={"/"}>
        <img
          src={require("../../assets/images/logo.png")}
          alt="logo"
          className="logo"
        />
      </NavLink>
      <div className="links">
        <NavLink
          to={"/sale"}
          className={({ isActive }) =>
            isActive ? "activeStyles sale" : "classicStyles sale"
          }
        >
          <h2>ON SALE</h2>
        </NavLink>
        <NavLink
          to={"/products"}
          className={({ isActive }) =>
            isActive ? "activeStyles" : "classicStyles"
          }
        >
          <h2>PRODUCTS</h2>
        </NavLink>
        <NavLink
          to={"/cart"}
          className={({ isActive }) =>
            isActive ? "activeStyles" : "classicStyles"
          }
        >
          {cart.length ? (
            <div className="cart-icon-container">
              <div className="cart-icon">
                <p style={{ color: "#fff" }}>{cart.length}</p>
              </div>
              <ShoppingCartIcon
                className="cartIcon"
                fontSize="large"
                style={{ width: "100%", height: "100%" }}
              />
            </div>
          ) : (
            <div className="cart-icon-container">
              <ShoppingCartIcon
                className="cartIcon"
                fontSize="large"
                style={{ width: "100%", height: "100%" }}
              />
            </div>
          )}
        </NavLink>
      </div>
    </header>
  );
}

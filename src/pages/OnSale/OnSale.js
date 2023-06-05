import React, { useContext, useState } from "react";
import { AppContext } from "../../context/AppContext";
import "./OnSale.css";
import Pagination from "@mui/material/Pagination";
import SaleProductCard from "../../components/Card/SaleProductCard";

export default function OnSale() {
  const { onSaleProducts, addToCart, deleteFromCart } = useContext(AppContext);
  const [page, setPage] = useState(1);
  const handleChange = (event, value) => {
    setPage(value);
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  const productsPerPage = 15;
  const numOfPages = Math.ceil(onSaleProducts.length / productsPerPage);

  console.log(onSaleProducts);
  return (
    <>
      <div className="cards">
        {onSaleProducts
          .map((product) => (
            <SaleProductCard
              key={product.id}
              id={product.id}
              productName={product.title}
              productPrice={
                product.price -
                (product.price * product.discountPercentage) / 100
              }
              productImage={product.imageURL}
              currencySign={"EUR"}
              addToCart={() => {
                addToCart(product.id);
              }}
              deleteFromCart={() => {
                deleteFromCart(product.id);
              }}
            />
          ))
          .slice((page - 1) * productsPerPage, page * productsPerPage)}
      </div>
      <div className="pagination">
        <Pagination
          size="large"
          count={numOfPages}
          page={page}
          onChange={handleChange}
        />
      </div>
    </>
  );
}

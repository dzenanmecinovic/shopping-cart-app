import React, { useContext, useState } from "react";
import { AppContext } from "../../context/AppContext";
import "./Products.css";
import Pagination from "@mui/material/Pagination";
import ProductCard from "../../components/Card/ProductCard";

export default function Products() {
  const { products, addToCart, deleteFromCart } = useContext(AppContext);
  const [page, setPage] = useState(1);
  const handleChange = (event, value) => {
    setPage(value);
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  const productsPerPage = 15;
  const numOfPages = Math.ceil(
    products.filter((product) => product.quantity <= 20).length /
      productsPerPage
  );

  console.log(products);
  return (
    <>
      <div className="cards">
        {products
          .filter((product) => product.quantity <= 20)
          .map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              productName={product.title}
              productPrice={product.price}
              productImage={product.imageURL}
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

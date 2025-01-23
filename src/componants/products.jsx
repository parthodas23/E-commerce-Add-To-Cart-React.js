import React, { useContext } from "react";
import { AddContext } from "../context/context";

const Products = (props) => {
  const context = useContext(AddContext);
  return (
    <div className="product-container">
      <h2>{props.name}</h2>
      <p>Price: ${props.price}</p>
      <button
        onClick={() => {
          context.setItems([
            ...context.items,
            { name: props.name, price: props.price },
          ]);
        }}
      >
        Add To Cart
      </button>
    </div>
  );
};

export default Products;

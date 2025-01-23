import React, { useContext } from "react";
import { AddContext } from "./context/context";

export const Cart = () => {
  const context = useContext(AddContext);
  console.log(context);

  const total = context.items.reduce((a, b) => a + parseFloat(b.price), 0);

  return (
    <div>
      <h2>Cart:Deatils</h2>
      {context &&
        context.items.map((item) => (
          <li>
            {item.name}-${item.price}
          </li>
        ))}
      <h3>Total Bill:${total}</h3>
    </div>
  );
};

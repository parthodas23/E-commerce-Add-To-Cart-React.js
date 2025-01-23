import React, { useState } from "react";
import "./App.css";
import Products from "./componants/products";
import { Cart } from "./cart";

function App() {
  return (
    <div>
      <Products name="Mackbook-Pro" price="1030"></Products>
      <Products name="iPhone-15" price="1099"></Products>
      <Products name="Apple-Watch" price="230"></Products>
      <Cart></Cart>
    </div>
  );
}

export default App;

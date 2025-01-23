import React, { createContext, useState } from "react";

export const AddContext = createContext(null);

export const ContextProvider = (propCon) => {
  const [items, setItems] = useState([]);
  return (
    <div>
      <AddContext.Provider value={{ items, setItems }}>
        {propCon.children}
      </AddContext.Provider>
    </div>
  );
};

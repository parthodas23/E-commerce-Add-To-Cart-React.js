import { createRoot } from "react-dom/client";
import App from "./App";
import { ContextProvider } from "./context/context";

createRoot(document.getElementById("root")).render(
  <div>
    <ContextProvider>
      <App></App>
    </ContextProvider>
  </div>
);

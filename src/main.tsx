import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Authenticator } from "@aws-amplify/ui-react";
import App from "./App";
import "./index.css";
import "./awsConfig";
import { CartProvider } from "./context/CartContext";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Authenticator.Provider>
        <CartProvider>
          <App />
        </CartProvider>
      </Authenticator.Provider>
    </BrowserRouter>
  </StrictMode>
);

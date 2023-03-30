import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import RoutesApp from "./routes";
import { GlobalStyle } from "./styles/GlobalStyles";
import UserContext from "./contexts/userContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <GlobalStyle />
    <BrowserRouter>
      <UserContext.Provider value={{}}>
        <RoutesApp />
      </UserContext.Provider>
    </BrowserRouter>
    <ToastContainer />
  </>
);

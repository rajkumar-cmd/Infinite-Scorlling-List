import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import AuthContextProvided from "./Context/AuthContextProvided.tsx";
import { ChakraProvider } from "@chakra-ui/react";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <ChakraProvider>
    <AuthContextProvided>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AuthContextProvided>
  </ChakraProvider>
);

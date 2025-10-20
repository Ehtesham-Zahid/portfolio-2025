import React from "react";
import { ThemeProvider } from "../providers/ThemeProvider";
import { BrowserRouter } from "react-router";

const Provider = ({ children }) => {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <BrowserRouter>{children}</BrowserRouter>
    </ThemeProvider>
  );
};

export default Provider;

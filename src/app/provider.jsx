import React from "react";
import { ThemeProvider } from "../providers/ThemeProvider";

const Provider = ({ children }) => {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      {children}
    </ThemeProvider>
  );
};

export default Provider;

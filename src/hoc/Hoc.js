import React from "react";
import AppRouter from "../AppRouter";
import Footer from "../components/Footer";

const Hoc = ({ children }) => {
  return (
    <div>
      <AppRouter />
      {children}
      <Footer />
    </div>
  );
};

export default Hoc;

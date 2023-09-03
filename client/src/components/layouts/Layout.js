import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Helmet } from "react-helmet";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Layout = (props) => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{props.title}</title>
      </Helmet>
      <Header />
      <main style={{ minHeight: "100vh" }}>
        <ToastContainer />
        {props.children}
      </main>
      <Footer />
    </div>
  );
};

Layout.defaultProps = {
  title: "Horizons",
};

export default Layout;

import React from "react";
import Layout from "../components/layouts/Layout";
import pnf from "../components/images/page-not-found.png";

const PageNotFound = () => {
  return (
    <Layout title="Page Not Found">
      <div className="container text-center">
        <img src={pnf} alt="" width={"400px"} />
        <h3 className="text-center">Oops! Page Not Found</h3>
      </div>
    </Layout>
  );
};

export default PageNotFound;

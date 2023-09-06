import React from "react";
import Layout from "../components/layouts/Layout";
import { useAuth } from "../context/auth";

const About = () => {
  const [auth] = useAuth();
  const { address, locality } = auth.user;
  console.log(address);
  return (
    <Layout title="About - Horizons">
      <h1>About</h1>
    </Layout>
  );
};

export default About;

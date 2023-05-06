import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

function Home() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <h1>HOME PAGE</h1>
    </HelmetProvider>
  );
}

export default Home;

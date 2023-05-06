import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import css from "./Home.module.scss";

function Home() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <h1 className={css.title}>Home Page </h1>
    </HelmetProvider>
  );
}

export default Home;

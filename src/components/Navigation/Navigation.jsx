import React, { Suspense } from "react";
import { Link, Outlet } from "react-router-dom";
import Loader from "components/Loader/Loader";
import css from "./Navigation.module.scss";

const Navigation = () => {
  return (
    <div className={css.container}>
      <header className={css.header}>
        <nav>
          <ul className={css.links}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/tweets">Tweets</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main className={css.main}>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
};

export default Navigation;

import React, { Suspense } from "react";
import { Link, Outlet } from "react-router-dom";
import Loader from "components/Loader/Loader";

const Navigation = () => {
  return (
    <div>
      <nav>
        <Link to="/tweets">Tweets</Link>
      </nav>
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
};

export default Navigation;

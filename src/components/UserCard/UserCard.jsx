import React from "react";
import css from "./UserCard.module.scss";
import { Link } from "react-router-dom";

const Tweets = () => {
  return (
    <div className={css.card}>
      <Link to="/">Go Back</Link>
      <h2>TWEETS</h2>
    </div>
  );
};

export default Tweets;

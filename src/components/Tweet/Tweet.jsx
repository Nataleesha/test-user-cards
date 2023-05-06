import React, { useState } from "react";
import css from "./Tweet.module.scss";
import logo from "images/logo.png";
import picture from "images/picture.png";
import axios from "axios";

axios.defaults.baseURL = "https://64542324e9ac46cedf3840c8.mockapi.io";

const Tweet = ({ user }) => {
  const [followed, setFollowed] = useState(user.followed);
  const followUser = async (id) => {
    try {
      await axios.put(`/users/${id}`, { followed: !followed });
      setFollowed(!followed);
    } catch (error) {
      console.log(error);
    }
  };

  const active = followed ? css.followed : "";

  return (
    <div className={css.card}>
      <img className={css.logo} src={logo} alt="logo"></img>
      <img className={css.picture} src={picture} alt="logo"></img>
      <div className={css.line}></div>
      <div className={css.avatar}>
        <img src={user.avatar} alt="avatar"></img>
      </div>
      <div className={css.info}>
        <p>{user.tweets} tweets</p>
        <p>{user.followers} followers</p>
        <button
          className={`${css.btn} ${active}`}
          type="button"
          onClick={() => followUser(user.id)}
        >
          {followed ? <span>following</span> : <span>follow</span>}
        </button>
      </div>
    </div>
  );
};

export default Tweet;

import React, { useState } from "react";
import css from "./Tweet.module.scss";
import axios from "axios";

axios.defaults.baseURL = "https://64542324e9ac46cedf3840c8.mockapi.io";

const Tweet = ({ user }) => {
  const [followed, setFollowed] = useState(user.followed);
  const [followers, setFollowers] = useState(user.followers);
  const followUser = async (id) => {
    try {
      await axios.put(
        `/users/${id}`,
        followed
          ? { followed: false, followers: followers - 1 }
          : { followed: true, followers: followers + 1 }
      );
      setFollowed(!followed);
      setFollowers(followed ? followers - 1 : followers + 1);
    } catch (error) {
      console.log(error);
    }
  };

  const active = followed ? css.followed : "";

  return (
    <div className={css.card}>
      <div className={css.avatar}>
        <img src={user.avatar} alt="avatar"></img>
      </div>
      <div className={css.info}>
        <p>{user.tweets} tweets</p>
        <p>{followers.toLocaleString("en-GB")} followers</p>
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

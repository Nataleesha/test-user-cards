import React, { useState, useEffect } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Tweet from "components/Tweet/Tweet";
import { Link } from "react-router-dom";
import axios from "axios";
import Loader from "components/Loader/Loader";
import css from "./Tweets.module.scss";

axios.defaults.baseURL = "https://64542324e9ac46cedf3840c8.mockapi.io";

const Tweets = () => {
  const [tweets, setTweets] = useState([]);
  const [slice, setSlice] = useState(3);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const res = await axios.get("/users");
        setTweets(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    getUsers();
  }, []);

  const goUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <HelmetProvider>
      <Helmet>
        <title>Tweets</title>
      </Helmet>
      {tweets.length === 0 ? (
        <Loader />
      ) : (
        <div className={css["tweets-container"]}>
          <div className={css["back-container"]}>
            <Link to="/" className={css.back}>
              Go Back
            </Link>
          </div>
          <ul>
            {tweets.slice(0, slice).map((tweet) => {
              return (
                <li key={tweet.id} className={css.tweet}>
                  <Tweet user={tweet} />
                </li>
              );
            })}
          </ul>
          {slice < tweets.length && (
            <button
              className={css["btn-load-more"]}
              type="button"
              onClick={() => {
                setSlice(slice + 3);
              }}
            >
              load more
            </button>
          )}
          <button className={css.up} onClick={goUp}>
            go up
          </button>
        </div>
      )}
    </HelmetProvider>
  );
};

export default Tweets;

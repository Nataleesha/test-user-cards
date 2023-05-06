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

  return (
    <HelmetProvider>
      <Helmet>
        <title>Tweets</title>
      </Helmet>
      <Link to="/">Go Back</Link>
      {tweets.length === 0 ? (
        <Loader />
      ) : (
        <ul>
          {tweets.map((tweet) => {
            return (
              <li key={tweet.id} className={css.tweet}>
                <Tweet user={tweet} />
              </li>
            );
          })}
        </ul>
      )}
    </HelmetProvider>
  );
};

export default Tweets;

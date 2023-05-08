import React, { useState, useEffect } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Tweet from "components/Tweet/Tweet";
import { Link } from "react-router-dom";
import axios from "axios";
import Loader from "components/Loader/Loader";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import css from "./Tweets.module.scss";

axios.defaults.baseURL = "https://64542324e9ac46cedf3840c8.mockapi.io";

const options = ["all", "follow", "followings"];
const defaultOption = options[0];

const Tweets = () => {
  const [tweets, setTweets] = useState([]);
  const [slice, setSlice] = useState(3);
  const [filter, setFilter] = useState(null);

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
  }, [filter]);

  const goUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const getFilter = (value) => {
    if (value === "follow") {
      setFilter(false);
    } else if (value === "followings") {
      setFilter(true);
    } else {
      setFilter(null);
    }
  };

  const filterTweets = () => {
    if (filter === null) {
      return tweets;
    }
    return tweets.filter((tweet) => tweet.followed === filter);
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

            <Dropdown
              className={css.dropdown}
              controlClassName={css.control}
              menuClassName={css.menu}
              optionlClassName={css.option}
              options={options}
              onChange={(e) => getFilter(e.value)}
              value={defaultOption}
              placeholder="Filter"
            />
          </div>
          <ul className={css.list}>
            {filterTweets()
              .slice(0, slice)
              .map((tweet) => {
                return (
                  <li key={tweet.id} className={css.tweet}>
                    <Tweet user={tweet} />
                  </li>
                );
              })}
          </ul>
          {slice < filterTweets().length && (
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

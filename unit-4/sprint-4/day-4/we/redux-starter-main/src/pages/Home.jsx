import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getFeedsAPI } from "../stores/feed/feed.actions";

const Home = () => {
  const dispatch = useDispatch();

  const { data, getFeeds } = useSelector((state) => state.feed);

  // localStorage, check id data
  useEffect(() => {
    if (data.length === 0) {
      dispatch(getFeedsAPI());
    }
  }, []);

  if (getFeeds.loading) return <div>Loading...</div>;
  if (getFeeds.error) return <div>Error...</div>;
  return (
    <div>
      <h1>Home</h1>
      <br />
      {data.map((feed) => (
        <div
          key={feed.id}
          style={{
            padding: "10px",
            margin: "auto",
            marginTop: "10px",
            border: "1px solid grey",
            maxWidth: "200px",
          }}
        >
          <div>{feed.title}</div>
          <div>{feed.description}</div>
        </div>
      ))}
    </div>
  );
};

export default Home;

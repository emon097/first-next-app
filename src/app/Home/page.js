"use client";
import React from "react";
import axios from "axios";

const Home = () => {
  const request_token = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/oauth");
      window.location.href = `${response.data.url}`;
    } catch (error) {
      console.error("Error requesting token:", error.message);
    }
  };

  return (
    <div>
      <div>
        <button onClick={request_token}>Tik tok</button>
      </div>
    </div>
  );
};

export default Home;

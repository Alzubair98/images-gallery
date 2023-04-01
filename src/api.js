import React from "react";
import axios from "axios";

const link = "https://api.unsplash.com/search/photos";
const Access_key = "ZA4eFftvCFPV-9rKFgqp16oHztvBzqz7iW1W-iuq0DI";
const searchImages = async () => {
  const response = await axios
    .get(link, {
      headers: {
        Authorization: `Client-ID ${Access_key}`,
      },
      params: {
        query: "cars",
      },
    })
    .catch((error) => console.log("api error", error));

  console.log(response);

  return response.data;
};

export default searchImages;

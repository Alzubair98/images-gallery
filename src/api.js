import axios from "axios";

const link = "https://api.unsplash.com/search/photos";
const Access_key = "ZA4eFftvCFPV-9rKFgqp16oHztvBzqz7iW1W-iuq0DI";

const searchImages = async (term) => {
  const response = await axios
    .get(link, {
      headers: {
        Authorization: `Client-ID ${Access_key}`,
      },
      params: {
        query: term,
      },
    })
    .catch((error) => console.log("api error", error));

  return response.data.results;
};

export default searchImages;

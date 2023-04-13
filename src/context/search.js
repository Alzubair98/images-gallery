import { createContext, useState } from "react";
import axios from "axios";

const SearchContext = createContext();

const link = "https://api.unsplash.com/search/photos";
const Access_key = "ZA4eFftvCFPV-9rKFgqp16oHztvBzqz7iW1W-iuq0DI";

const Provider = ({ children }) => {
  const [images, setImages] = useState([]);

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

    setImages(response.data.results);
  };

  const valueToShare = {
    images,
    searchImages,
  };

  return (
    <SearchContext.Provider value={valueToShare}>
      {children}
    </SearchContext.Provider>
  );
};

export { Provider };
export default SearchContext;

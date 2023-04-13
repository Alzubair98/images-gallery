import { useContext } from "react";
import searchContext from "../context/search";

const useSearchContext = () => {
  return useContext(searchContext);
};

export default useSearchContext;

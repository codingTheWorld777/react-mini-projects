import { useState, useEffect } from "react";
import youtube from "../api/youtube";

const useVideos = (defaultSearchTerm) => {
  const [videos, setVideos] = useState([]);

  // Run once time in the initial render
  useEffect(() => {
    search(defaultSearchTerm);
  }, [defaultSearchTerm]);

  /** To handle form submit from SearchBar component
   * -> Pass props from SearchBar(child) to App(parent)
   */
  const search = async (term) => {
    const response = await youtube.get("/search", {
      params: {
        q: term,
      },
    });

    setVideos(response.data.items);
  };

  return [videos, search];
};

export default useVideos;
